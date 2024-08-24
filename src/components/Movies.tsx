import { MovieProps } from "../interface/movieProps";

export function Movies({ title, movies, moviesS }: MovieProps) {


    return (
        <>
            <h1>{title}</h1>
            <div className="flex gap-4 flex-wrap">
                {
                    movies.map((movie) => (
                        <img className="w-24 h-auto"
                            key={movie.id}
                            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                            alt={movie.name}
                        />
                    ))
                }

            </div>
            <div className="flex gap-4 flex-wrap">
                {
                    moviesS.map((movie) => (
                        <img className="w-24 h-auto"
                            key={movie.id}
                            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                            alt={movie.name}
                        />
                    ))
                }
            </div>
        </>
    )
}

