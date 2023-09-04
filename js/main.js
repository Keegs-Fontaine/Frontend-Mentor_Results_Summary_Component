const summaryBody = document.querySelector("[data-summaryBody]");

function summaryItem(category, score, icon, color) {
  console.log(color);

  const sumItem = `
          <section style="background-color: ${
            color.substring(0, color.length - 1) + " / 0.15)"
          }" class="summary__item">
              <img src="${icon}" alt="icon" />
              <h3 style="color: ${color}">${category}</h3>
              <h4 class="summary__score"><span>${score}</span>/100</h4>
          </section>
      `;

  summaryBody.innerHTML += sumItem;
}

async function importData() {
  const res = await fetch("../data.json");
  const data = await res.json();

  data.forEach((sumItem) => {
    summaryItem(sumItem.category, sumItem.score, sumItem.icon, sumItem.color);
  });
}
importData();
