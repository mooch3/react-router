import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'D',
        text: 'React is kewl'
    },
    {
        id: 'q2',
        author: 'D',
        text: 'React is litty'
    },
    {
        id: 'q3',
        author: 'D',
        text: 'React is nice'
    }
];

const QuoteDetail = () => {
    const match = useRouteMatch();

    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link to={`${match.url}/comments`} className='btn--flat'>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>

        </>
    )
}

export default QuoteDetail;