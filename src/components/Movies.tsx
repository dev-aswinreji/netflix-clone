import { MovieProps } from "../interface/movieProps";

export function Movies({ title, movies, moviesS ,trending}: MovieProps) {


    return (
        <>
            <h1>{title}</h1>
            <h1>Originals</h1>
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

                <h1 >Trending</h1>
            <div className="p-4 flex gap-4 flex-wrap">
                {
                    trending.map((movie) => (
                        <img className="w-24 h-auto"
                            key={movie.id}
                            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                            alt={movie.name}
                        />
                    ))
                }
            </div>

            <h1>Trending Now</h1>
            <div className="p-4 flex gap-4 flex-wrap">
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

