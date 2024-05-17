import { getMessagesFromDatabase } from "@/actions/get-message-from-database";
import MessageForm from "@/components/message-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const runtime = "edge"

export default async function Home() {
  const messages = getMessagesFromDatabase()
  return (
    <main className={`max-w-2xl mx-auto p-10`}>
      <MessageForm/>
      <div className={`p-5`}>
        <ul>
          {(await messages).map(message => {
            return (
              <li key={message.id}>{message.message}</li>
            )
          })}
        </ul>
      </div>


    </main>
  )
}
