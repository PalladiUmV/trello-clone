import { useDispatch, useSelector } from "react-redux";
import TrelloList from "./TrelloList";

function App() {

  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists)

  return (
    <div className="App">
      <div style={styles.listsContainer}>
        {lists.map(list => <TrelloList title={list.title} cards={list.cards} key={list.id} />)}
      </div>
    </div>
  );
}

const styles = {
  listsContainer: {
    display: 'flex',
  }
}

export default App;
