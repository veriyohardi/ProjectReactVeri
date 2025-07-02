import { useState, useEffect } from "react";

const ProductCRUD = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [count, setCount] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAdd = () => {
        if (title && price && category && image && description && rate && count) {
            const newProduct = { title, price, category, image, description, rating: { rate, count } };
            if (editIndex !== null) {
                const updatedProducts = [...products];
                updatedProducts[editIndex] = newProduct;
                setProducts(updatedProducts);
                setEditIndex(null);
            } else {
                setProducts([...products, newProduct]);
            }
            setTitle("");
            setPrice("");
            setCategory("");
            setImage("");
            setDescription("");
            setRate("");
            setCount("");
        }
    };

    const handleEdit = (index) => {
        const product = products[index];
        setTitle(product.title);
        setPrice(product.price);
        setCategory(product.category);
        setImage(product.image);
        setDescription(product.description);
        setRate(product.rating.rate);
        setCount(product.rating.count);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };
    return (
        <>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", marginBottom: "12px" }}>
                Manajemen Produk
            </h1>
            <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "12px" }}>
                <input type="text" placeholder="Nama Produk" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="number" placeholder="Harga Produk" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="Kategori" value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="URL Gambar" value={image} onChange={(e) => setImage(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="Deskripsi" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="number" placeholder="Rating" value={rate} onChange={(e) => setRate(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="number" placeholder="Jumlah Ulasan" value={count} onChange={(e) => setCount(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <button onClick={handleAdd} style={{ width: "100%", backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
                    {editIndex !== null ? "Update Produk" : "Tambah Produk"}
                </button>
            </div>
            <div>
                {products.map((product, index) => (
                    <div key={index} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "8px", borderRadius: "5px" }}>
                        <p style={{ fontWeight: "bold", color: product.price < 20 ? "yellow" : "red" }}>{product.title}</p>
                        <p>Rp{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <p>Rating: {product.rating?.rate} ({product.rating?.count} ulasan)</p>
                        <img src={product.image} alt={product.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                        <div style={{ marginTop: "8px" }}>
                            <button onClick={() => handleEdit(index)} style={{ marginRight: "5px", backgroundColor: "orange", color: "white", padding: "5px", border: "none" }}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(index)} style={{ backgroundColor: "red", color: "white", padding: "5px", border: "none" }}>
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductCRUD;