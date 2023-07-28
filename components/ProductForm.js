import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import {ReactSortable} from "react-sortablejs";

export default function ProductForm({
  _id,
  title:existingTitle,
  description:existingDescription,
  price:existingPrice,
  images:existingImages,
  category:assignedCategory,
  properties:assignedProperties,
  stock:assignedStock,
  categories:assignedCategories,
  offer:assignedOffer
}) {
  const [title,setTitle] = useState(existingTitle || '');
  const [description,setDescription] = useState(existingDescription || '');
  const [category,setCategory] = useState(assignedCategory || '');
  const [productProperties,setProductProperties] = useState(assignedProperties || {});
  const [price,setPrice] = useState(existingPrice || '');
  const [images,setImages] = useState(existingImages || []);
  const [goToProducts,setGoToProducts] = useState(false);
  const [isUploading,setIsUploading] = useState(false);
  const [categories,setCategories] = useState(assignedCategories || []);
  const [stock, setStock] = useState(assignedStock || '');
  const [offer, setOffer] = useState(assignedOffer || []);
  const [percentage, setPercentage] = useState(0);
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const router = useRouter();
  useEffect(() => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    })
  }, []);
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,description,price,images,category,
      properties:productProperties,stock, offer
    };
    if (_id) {
      //update
      await axios.put('/api/products', {...data,_id});
    } else {
      //create
      await axios.post('/api/products', data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push('/productos');
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }
      const res = await axios.post('/api/upload', data);
      setImages(oldImages => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  function setProductProp(propName,value) {
    setProductProperties(prev => {
      const newProductProps = {...prev};
      newProductProps[propName] = value;
      return newProductProps;
    });
  }
  function addOffer(){
    setOffer( prev => {
      return [...prev, {startDate:new Date(), endDate:new Date(), percentage:0}]
    })
  }
  function handleOfferStartDateChange(index,property,newStartDate){
    setOffer(prev => {
      const offers = [...prev];
      offers[index].startDate = newStartDate;
      return offers;
    });
  }
  function handleOfferEndDateChange(index, property, newEndDate){
    setOffer(prev => {
      const offers = [...prev];
      offers[index].endDate = newEndDate;
      return offers;
    });
  }
  function handleOfferPercentageChange(index, property, newPercentage){
    setOffer(prev => {
      const offers = [...prev];
      offers[index].percentage = newPercentage;
      return offers;
    });
  }
  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({_id}) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while(catInfo?.parent?._id) {
      const parentCat = categories.find(({_id}) => _id === catInfo?.parent?._id);
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
      <form onSubmit={saveProduct}>
        <label>Nombre del producto</label>
        <input
          type="text"
          placeholder="nombre del producto"
          value={title}
          onChange={ev => setTitle(ev.target.value)}/>
        <label>Categoria</label>
        <select value={category}
                onChange={ev => setCategory(ev.target.value)}>
          <option value="">Sin categoria</option>
          {categories.length > 0 && categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        {propertiesToFill.length > 0 && propertiesToFill.map(p => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
            <div>
              <select value={productProperties[p.name]}
                      onChange={ev =>
                        setProductProp(p.name,ev.target.value)
                      }
              >
                {p.values.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <label>
          Photos
        </label>
        <div className="mb-2 flex flex-wrap gap-1">
          <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}>
            {!!images?.length && images.map(link => (
              <div key={link} className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200">
                <img src={link} alt="" className="rounded-lg"/>
              </div>
            ))}
          </ReactSortable>
          {isUploading && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              Agregar imagen
            </div>
            <input type="file" onChange={uploadImages} className="hidden"/>
          </label>
        </div>
        <label>Stock</label>
        <input
          type="text"
          placeholder="Stock del producto"
          value={stock}
          onChange={ev => setStock(ev.target.value)}/>
        <label>Descripcion</label>

        <textarea
          placeholder="descripcion"
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />
        <label>Precio (en Soles)</label>
        <input
          type="number" placeholder="precio"
          value={price}
          onChange={ev => setPrice(ev.target.value)}
        />
        <div className="mb-2">
          <label>Oferta</label>
          <button
              onClick={addOffer}
              type="button"
              className="btn-default text-sm mb-2">
              Agregar Nueva Oferta
            </button>
            {offer.length>0 && offer.map((offer,index) =>(
              
                <div key={index}>
                        <h2>Oferta {index +1 }</h2>
                        <label>Fecha inicio</label>
                        <input type="datetime-local"
                        value={offer.startDate}
                        className="mb-2"
                        onChange={ev => handleOfferStartDateChange(index,offer,ev.target.value)}
                        placeholder="Fecha inicio"/>
                        <label>Fecha Fin</label>
                        <input type="datetime-local"
                        value={offer.endDate}
                        className="mb-2"
                        min={offer.startDate}
                        onChange={ev => handleOfferEndDateChange(index,offer,ev.target.value)}
                        placeholder="Fecha Fin"/>
                        <label>Porcentaje</label>
                        <input
                          type="number" placeholder="Porcentaje"
                          value={offer.percentage}
                          onChange={ev => handleOfferPercentageChange(index,offer,ev.target.value)}
                        />
                </div>

                
            ))}
        </div>
        
        <button
          type="submit"
          className="btn-primary">
          Save
        </button>
      </form>
  );
}
