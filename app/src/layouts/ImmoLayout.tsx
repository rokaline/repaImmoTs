import { AppShell, Container, MantineProvider } from "@mantine/core";
import { TopBar } from "../components/TopBar";
import {Outlet} from "react-router-dom";

export function ImmoLayout(){
    return(
        <MantineProvider>
            <Container>
                <AppShell header={{height: 75}} padding="md">
                    <AppShell.Header>
                    {/* rappel de ma TopBar */}
                        <TopBar/> 
                    </AppShell.Header>

                    <AppShell.Main>
                        <Outlet/>
                    </AppShell.Main>
                </AppShell>
            </Container>

        </MantineProvider>   
        
    );

}