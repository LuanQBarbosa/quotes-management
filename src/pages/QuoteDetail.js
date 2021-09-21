import { Fragment } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Luan',
    text: 'Learning React is fun!'
  },
  {
    id: 'q2',
    author: 'Lucas',
    text: 'Learning React is great!'
  }
]

const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return (
      <p>No quote found!</p>
    );
  }
  
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;