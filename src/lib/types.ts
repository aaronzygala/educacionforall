
interface PostImage{
    id: string,
    mimeType: string,
    sourceUrl: string,
}
interface Author{
    id: string,
    firstName: string,
    lastName: string,
}
interface Post {
    id: string,
    excerpt: string,
    date: string,
    author: Author,
    featuredImage: PostImage,
    title: string,
    uri: string,
}

export type {PostImage, Author, Post}