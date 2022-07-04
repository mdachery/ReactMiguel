import { useEffect , useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from "../../utils/productsMocks"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../utils/firebaseConfig"

const ItemDetailContainer = () => {
    const { id } = useParams () //con esta linea obtengo el parametro que es pasado a la URL (quien le pasa es el Link en Cards) (Routing en App esta relacionado)
    const [product, setProduct] = useState ({})
 
/*
    const getItem = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout (() => {
                resolve (producto)
            }, 2000)
        })
    }
*/



    useEffect (() => {
        

        getProduct ()
        .then ( (prod) => {
            console.log ("Respuesta GetItem ", prod)
            setProduct (prod)
        })


        // setProduct (productFilter)


    }, [id])

        const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
       return product
    }

    // const productFilter = productos.find ( (product) => {

    //     return product.id == id //hay que usar == y no === ya que desde la URL se trae una string

    // })

    return (
        <>
        <div>Contenedor de Items</div>
        <ItemDetail data = {product}/>
        </>
    )

}

export default ItemDetailContainer