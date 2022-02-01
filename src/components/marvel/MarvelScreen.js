import { HeroList } from '../hero/HeroList';


export const MarvelScreen = () => {
    const historieta = 'Marvel Comics';

    return (
        <div>
            <h1>MarvelScreen</h1>
            <HeroList publisher={ historieta }/>
        </div>
    )
};
