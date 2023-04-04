import React, { useEffect, useState } from "react";

const url = "http://localhost:8080/produits";
export default function Produits() {
    const [produits, setProduits] = useState([]);



    useEffect(() => {
        loadProduits();
    }, []);

    const loadProduits = async () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProduits(data));
    };
    componentDidUpdate(){
        loadProduits();
    };


    const deleteProduit = async (id) => {
        //  await axios.delete(`http://localhost:8080/user/${id}`);
        loadProduits();
    };

    return (
        <div className="container">
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Desigation</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits.map((produit, index) => (
                            <tr>
                                <th scope="row" key={produit.id}>
         //         {index + 1}
                                </th>
                                <td>{produit.designation}</td>
                                <td>{produit.prix}</td>
                                <td>{produit.quantite}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}