import React from 'react';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UiProvider>
                <RouterPage />
            </UiProvider> 
        </SocketProvider>
    )
}
