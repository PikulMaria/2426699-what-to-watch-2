import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import GenresItem from '../genres-item/genres-item.tsx';
import { ECatalog, eCatalogValues } from '../../types/ECatalog.ts';
import { SmallFilmCard } from '../small-film-card/small-film-card.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/stores.ts';
import { setGenre } from '../../store/action/action.ts';
import NotFoundPage from '../../page/not-found/not-found.tsx';
import Spinner from '../spinner/spinner.tsx';
import {
  currentGenre,
  selectFilmsData,
  selectFilmsError,
  selectFilmsStatus
} from '../../store/films/film-selectors.ts';
import { fetchMovies } from '../../store/api-actions/api-actions.ts';


const VISIBLE_FILMS_COUNT = 8;

interface ICatalogProps {
  withGenres?: boolean;
}
export const Catalog: FC<ICatalogProps> = ({withGenres}) => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(VISIBLE_FILMS_COUNT);
  const genre = useAppSelector(currentGenre);
  const films = useAppSelector(selectFilmsData);
  const filmsError = useAppSelector(selectFilmsError);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films === null) {
      dispatch(fetchMovies());
    }
  }, [dispatch, films]);

  const handleSetGenre = useCallback((value: ECatalog) => () => {
    dispatch(setGenre(value));
    setVisibleFilmsCount(VISIBLE_FILMS_COUNT);
  }, [dispatch]);


  const filteredFilms = useMemo(() => {
    if (genre === ECatalog.All) {
      return films;
    }
    return films?.filter((film) => film.genre === genre);
  }, [genre, films]);

  const handleShowMoreClick = useCallback(() => {
    const newVisibleCount = Math.min(visibleFilmsCount + VISIBLE_FILMS_COUNT, filteredFilms?.length || 0);
    setVisibleFilmsCount(newVisibleCount);
  }, [visibleFilmsCount, filteredFilms]);

  const isShowMore = useMemo(() => {
    if (filteredFilms?.length) {
      return filteredFilms?.length - visibleFilmsCount > 0;
    }
    return 0;
  } , [filteredFilms, visibleFilmsCount]);

  if (filmsError) {
    return <NotFoundPage/>;
  }

  if (!films || filmsStatus === 'LOADING') {
    return <Spinner/>;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {withGenres &&
          eCatalogValues.map((catalog) => (
            <GenresItem catalog={catalog} key={catalog} setGenre={handleSetGenre} isActive={catalog === genre} />
          ))}
      </ul>

      <div className="catalog__films-list">
        {filteredFilms?.slice(0, visibleFilmsCount).map((film) => (
          <SmallFilmCard key={film.id} film={film} />
        ))}
      </div>

      {isShowMore && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreClick}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};