interface RepoInterface {
    name: string;
    description: string;
    html_url: string;
    language: string;
}

// class Repo {

//     static create(event: RepoInterface) {
//         return new Repo(
//             name: event.name,
//             description: event.description,
//             html_url: event.html_url,
//             language: event.language,
//         );
//     }
// }

class Repo {
    name: string;
    description: string;
    html_url: string;
    language: string;

    constructor(
        name: string,
        description: string,
        html_url: string,
        language: string
    ) {
        this.name = name;
        this.description = description;
        this.html_url = html_url;
        this.language = language;
    }
}

export default Repo;
