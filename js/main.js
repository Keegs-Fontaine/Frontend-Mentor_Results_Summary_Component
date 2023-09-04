const summaryBody = document.querySelector("[data-summaryBody]");

function summaryItem(category, score, icon) {
  const sumItem = `
          <section class="summary-item">
              <img src="${icon}" alt="icon" />
              <h3>${category}</h3>
              <h4><span>${score}</span>/100</h4>
          </section>
      `;

  summaryBody.innerHTML += sumItem;
}

async function importData() {
  const res = await fetch("../data.json");
  const data = await res.json();

  data.forEach((sumItem) => {
    summaryItem(sumItem.category, sumItem.score, sumItem.icon);
  });
}
importData();
