import { Anchor, Button , Group } from "@mantine/core";

export function TopBar(){
    return(
        <Group justify="space-between" align="center" style={{ margin: "0px 10px", height: "100%" }}>
            <Group mih={50} gap="xs"
                justify="flex-end"
                align="center"
                wrap="wrap">
                <Anchor href="https://mantine.dev/" target="_blank">
                    Product
                </Anchor>

                <Button variant="filled" color="gray" size="xs" radius="md">
                    Sign In 
                </Button>

                <Button variant="filled" color="gray" size="xs" radius="md">
                    Sign Out 
                </Button>
            </Group>
        </Group>
    );
} 