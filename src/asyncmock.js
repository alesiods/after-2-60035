const misProductos = [
    { id: "1", nombre: "Yerba", stock: 10, precio: 10000, img: "../img/yerba.jpg", idCat: "lacteos", descripcion: "Yerba de palo, altamente seleccionada" },
    { id: "2", nombre: "Fideos", stock: 12, precio: 200, img: "../img/fideos.jpg", idCat:"lacteos", descripcion: "Fideos linea premiun" },
    { id: "3", nombre: "Arroz", stock: 5, precio: 300, img: "../img/arroz.jpg", idCat:"almacen", descripcion: "Arroz doble carolina especial que no se pega" }, 
    { id: "4", nombre: "Aceite", stock: 7, precio: 900, img: "../img/aceite.jpg", idCat:"almacen", descripcion: "Aceite de primera linea" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}


//Actividad after: Agregar el datalle del producto
//Crear una funcion similar a la anterior pero que solo nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 500)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 500);

    })

}