const loadHistory = () => {
  const container = document.getElementById("historySection");

  const data = JSON.parse(localStorage.getItem("payhistory"));

  container.innerHTML=""
  data?.map((i) => {
      const div = document.createElement("div");
      const strong = document.createElement("strong");
      const p = document.createElement("p");
    div.appendChild(strong);
    div.appendChild(p);

    div.classList.add("bg-base-100");
    div.classList.add("mt-2");
    div.classList.add("border");
    div.classList.add("border-gray-200/70");
    div.classList.add("gap-6");
    div.classList.add("p-8");
    div.classList.add("rounded-lg");
    strong.classList.add("font-bold");
    p.classList.add("text-sm");
    p.classList.add("font-thin");

    strong.innerText = `${i.amount} Taka is Donated for ${i.title}`;
    p.innerText = `Date : ${i.time}`;

    container.append(div);

  });
};

document.getElementById("historyBtn").addEventListener('click',loadHistory)
