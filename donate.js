const draftBalance = JSON.parse(localStorage.getItem("balance"));
const draftDonatedInfo = JSON.parse(localStorage.getItem("payInfo"));

if (
  draftDonatedInfo?.find(
    (i) => i.title === "Donate for Flood at Noakhali, Bangladesh"
  )
) {
  const noakhali = document.getElementById("noakhali");
  noakhali.innerText =
    draftDonatedInfo.find(
      (i) => i.title === "Donate for Flood at Noakhali, Bangladesh"
    ).amount + " BDT";
}

if (
  draftDonatedInfo?.find(
    (i) => i.title === "Donate for Flood Relief in Feni,Bangladesh"
  )
) {
  const feni = document.getElementById("feni");
  feni.innerText =
    draftDonatedInfo.find(
      (i) => i.title === "Donate for Flood Relief in Feni,Bangladesh"
    ).amount + " BDT";
}

if (
  draftDonatedInfo?.find(
    (i) => i.title === "Aid for Injured in the Quota Movement"
  )
) {
  const quota = document.getElementById("quota");
  quota.innerText =
    draftDonatedInfo.find(
      (i) => i.title === "Aid for Injured in the Quota Movement"
    ).amount + " BDT";
}
if (draftBalance === 0 || draftBalance > 0) {
  document.getElementById("myBalance").innerText = draftBalance + " BDT";
}

document.querySelectorAll(".donateNowBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const donationAmount =
      e.target.parentNode.parentNode.getElementsByTagName("input")[0]?.value;

    if (Number(donationAmount) > 0) {
      const currentBalance = document.getElementById("myBalance");
      const crBalanceStrToInt = Number(
        currentBalance.innerText.split("BDT")[0]
      );

      if (crBalanceStrToInt < Number(donationAmount)) {
        alert("You don't have enough Balance");
      } else {
        const finalBalance = crBalanceStrToInt - Number(donationAmount);

        currentBalance.innerText = finalBalance + " BDT";
        localStorage.setItem("balance", JSON.stringify(finalBalance));

        const title =
          e.target.parentNode.parentNode.querySelector(".card-title").innerText;

        const donationDisplayAmount =
          e.target.parentNode.parentNode.querySelector(".donatedAmount");

        donationDisplayAmount.innerText =
          Number(donationDisplayAmount.innerText.split("BDT")[0]) +
          Number(donationAmount) +
          " BDT";

        e.target.parentNode.parentNode.getElementsByTagName("input")[0].value =
          "";

        const myModal = document.getElementById("my_modal");

        myModal.showModal();

        const localStorageDonatedData = JSON.parse(
          localStorage.getItem("payInfo")
        );

        if (!localStorageDonatedData) {
          localStorage.setItem(
            "payInfo",
            JSON.stringify([
              {
                title: title,
                amount: donationAmount,
              },
            ])
          );
        } else {
          if (localStorageDonatedData?.find((i) => i.title === title)) {
            localStorage.setItem(
              "payInfo",
              JSON.stringify([
                ...localStorageDonatedData.filter((i) => i.title !== title),
                {
                  title: title,
                  amount: Number(
                    donationDisplayAmount.innerText.split("BDT")[0]
                  ),
                },
              ])
            );
          } else {
            localStorage.setItem(
              "payInfo",
              JSON.stringify([
                ...localStorageDonatedData,
                {
                  title: title,
                  amount: donationAmount,
                },
              ])
            );
          }
        }

        const localStorageHistoryData = JSON.parse(
          localStorage.getItem("payhistory")
        );

        if (!localStorageHistoryData) {
          console.log("nai");
          localStorage.setItem(
            "payhistory",
            JSON.stringify([
              {
                title: title,
                amount: donationAmount,
                time: new Date(),
              },
            ])
          );
        } else {
          localStorage.setItem(
            "payhistory",
            JSON.stringify([
              ...localStorageHistoryData,
              {
                title: title,
                amount: donationAmount,
                time: new Date(),
              },
            ])
          );
        }
      }
    } else {
      alert("Invalid amount");
    }
  });
});
