async function getCatFacts() {
    const url = "https://cat-fact.herokuapp.com/facts";
    const response = await fetch(url);
    const results = await response.json();
    const facts = results.all;
    console.log(facts.length);
}

getCatFacts();
