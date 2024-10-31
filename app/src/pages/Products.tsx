import { ImmoCard } from "../components/ImmoCard";

function Products(){
    return(
        // <p>Coucou, on est dans Products.tsx</p>

        <ImmoCard
            id="test1"
            name="maison test 1"
            price={2}
            description="description test 1"
            image="image test 1"


        />
    );
}

export default Products;