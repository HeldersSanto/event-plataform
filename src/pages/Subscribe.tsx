import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { useCreateSubscriberMutation } from "../generated";


export function Subscribe(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    const navigate = useNavigate()

    async function handleSubscribe(ev: FormEvent){
        ev.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate("/event")
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto">
                <div className="max-w-[640px] ">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> JS
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input type="text"
                        className="bg-gray-900 rounded px-5 h-14"
                         placeholder="Seu nome completo"
                         onChange={ev => setName(ev.target.value)}
                        />
                        <input type="email"
                        className="bg-gray-900 rounded px-5 h-14"
                        placeholder="Qual seu melhor email?"
                        onChange={ev => setEmail(ev.target.value)}
                        />
                        <button disabled={loading} type="submit" className="mt-4 bg-green-500 uppercase py-4 font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code.png" className="mt-10" alt="" />
        </div>
    )
}