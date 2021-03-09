
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
               <RepositoryItem respository="unform2" description="Forms in react" link=""/>
              
            </ul>
        </section>
    )
}