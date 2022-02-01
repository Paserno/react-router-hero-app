import { HeroList } from '../hero/HeroList';


export const DcScreen = () => {
    const historieta = 'DC Comics';
    return (
        <div>
            <h1>DcScreen</h1>
            <HeroList publisher={ historieta }/>
        </div>
    )
};
