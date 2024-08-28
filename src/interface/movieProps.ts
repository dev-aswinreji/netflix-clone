
interface Movie {
    id: number;
    poster_path: string;
    name: string;
}

export interface MovieProps {
    title: string;
    movies: Movie[];
    moviesS: Movie[];
    trending: Movie[];
}