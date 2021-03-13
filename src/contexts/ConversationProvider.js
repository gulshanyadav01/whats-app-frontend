import React, {useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationsContext  = React.createContext(); 


export function useConversations(){
    return useContext(ConversationsContext);
}

export  function ConversationsProvider({ children }) {
    const [conversations, setConversations ] = useLocalStorage('conversations', [])

    function createConversations(recipients){
        setConversations(prevConversations => {
            return [...prevConversations , {recipients, message:[]}]
        })
    }

    const formattedConversations = conversations.map(conversation => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
        })
    })

    return (
        <ConversationsContext.Provider value = {{conversations, createConversations}}>
            {children}
        </ConversationsContext.Provider>
    )
}
