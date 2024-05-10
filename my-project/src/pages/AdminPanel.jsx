import React, { useState } from "react";
import { db, collection, addDoc } from '../firebase'; // Import db, collection, and addDoc
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(); // Initialize Firebase Storage

const AdminPanel = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null); // Changed to store file object
   
    const handleImageUpload = (e) => {
        setProductImage(e.target.files[0]);
    };
    
    const handleAddProduct = async (e) => {
        e.preventDefault();

        try {
            // Ensure a file is selected
            if (!productImage) {
                throw new Error("Please select an image.");
            }
    
            // Upload image to Firebase Storage
            const storageRef = ref(storage, `product_images/${productImage.name}`);
            await uploadBytes(storageRef, productImage);
    
            // Get image URL from Firebase Storage
            const imageUrl = await getDownloadURL(storageRef);
    
            // Create a new product document in Firestore
            const newProductRef = await addDoc(collection(db, "products"), {
                name: productName,
                description: productDescription,
                price: productPrice,
                image: imageUrl // Store image URL in Firestore
            });
    
            // Optionally, you can display a success message or perform other actions
            console.log("Product added successfully with ID: ", newProductRef.id);
    
            // Clear the input fields after adding the product
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setProductImage(null); // Reset file input
        } catch (error) {
            console.error("Error adding product:", error.message);
            // Optionally, you can display an error message to the user
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                   <br />
                {/* Input for image selection */}
                <input
                    type="file"
                    onChange={handleImageUpload} // Trigger function to handle image upload
                />
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPanel;
