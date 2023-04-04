import React from 'react'
import { useState } from 'react';
const url="http://localhost:8080/projets";
export default function AddProduit() {
    const [produit, setProduit] = useState({
        idProduit:"",
        designation: "",
        prix: "",
        quantite: "",
    });

    const { idProduit,designation, prix, quantite } = produit;

    const onInputChange = (e) => {
        setProduit({ ...produit, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let data=JSON.stringify(produit);
        let head={'content-type':'application/json'};
         fetch(url, {method:'POST',headers: head,body:data})
         .catch((er)=>{console.log(er)});

    };

    return (
        <div className="App">
            <div>
                <div>
                    <h2>Ajouter un produit</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                            <label htmlFor="idProduit">
                                id
                            </label>
                            <input
                                type={"text"}
                                placeholder="id du produit"
                                name="idProduit"
                                value={idProduit}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>                    
                        <div>
                            <label htmlFor="designation">
                                Désignation
                            </label>
                            <input
                                type={"text"}
                                placeholder="Désingation"
                                name="designation"
                                value={designation}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="prix">
                                Prix
                            </label>
                            <input
                                type={"text"}
                                placeholder="prix"
                                name="prix"
                                value={prix}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="quantite">
                                Quantité
                            </label>
                            <input
                                type={"text"}
                                placeholder="Quantité"
                                name="quantite"
                                value={quantite}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
