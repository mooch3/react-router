import QuoteList from '../components/quotes/QuoteList';

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
]

const Quotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default Quotes;