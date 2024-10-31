import { Flex, Image, Text } from '@mantine/core';

interface ImmoCardProps{

    id: string,
    name: string,
    price: number, 
    description: string, 
    image: string,
    
}
export function ImmoCard({id,name, price, description, image} : ImmoCardProps){
    return(
  
        <Flex key={id} align="center" mb="md">
            <Image src={image} alt="image du bien " width={200}/>
            <Flex direction="column">
                <Text>{name}</Text>
                <Text>{price}</Text>
                <Text>{description}</Text>
            </Flex>

        </Flex>
    );
}