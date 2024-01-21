import Entry from "../Entry/Entry.jsx";
export default function EntriesSection() {
  return (
    <section className="entries-section">
      <div className="entries-section__entries">
        <Entry
          date="Feb 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Entry
          date="Feb 26, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Entry
          date="Feb 25, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </div>
    </section>
  );
}
