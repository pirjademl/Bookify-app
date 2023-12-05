import Book from "./Book";
import "../Bookgallery.css"

export default function Bookgallery() {
    return (
        // React components use props to communicate with each other .Every parenet component can pass 
        // some information to its child by giving them props .this props can be any javascript value 
        // such as arrays objects functions 
        <div className="book-components-container">
            <Book bookInfo={{ title: "The god of small things ", src: "https://i.cbc.ca/1.5888199.1679399691!/fileImage/httpImage/the-god-of-small-things-by-arundhati-roy.jpg", theme: "Arundhati Roy's The God of Small Things narrates the story of two fraternal twins whose bond persists over many years of family strife and political unrest. The post-colonial narrative critiques the caste system in India, portraying how it perpetuates injustice.", author: "Arundhati Roy", date: "1997" }} size={100} />

            <Book bookInfo={{ title: " The Metamorphosis", src: "https://i1.sndcdn.com/artworks-000075753858-qzwire-t500x500.jpg", theme: "The Metamorphosis is about Gregor Samsa, a traveling salesman who wakes up one day to find that he has transformed into a giant insect. His family is disgusted with him, especially when he is no longer able to earn income. Gregor eventually dies after deciding that he is a burden to his family.", author: "Franz Kafka", date: "1915", }} />
            <Book bookInfo={{ title: " Crime and punishment", src: "https://cdn.kobo.com/book-images/c8f66724-16c7-4e30-ab42-2e205435eb20/353/569/90/False/crime-and-punishment-by-fyodor-dostoyevsky.jpg", theme: "In Crime and Punishment, some of the themes that are explored include alienation, utilitarianism, and repercussions for our actions. The protagonist and murderer, Raskolnikov, is alienated from society because of his feelings of superiority over other people.", author: "Fydoor dostoveisky", date: "1866", }} />
            <Book bookInfo={{ title: "The free voice", src: "https://m.media-amazon.com/images/I/51ixQKmSNML._SY445_SX342_.jpg", theme: "Ravish Kumar is a senior executive editor of NDTV India and one of the most influential Hindi journalists. He was recently awarded the Magsaysay Award, and is famous for his monologues on NDTV India. He is said to be a journalist that raises issues that actually bother the nation, and the majority of its population. He holds the establishment to account", author: "Ravish Kumar", date: "2020", }} />
        </div>
    )
}

