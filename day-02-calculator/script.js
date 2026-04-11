const basePrice = document.getElementById("base-price");
const discountPercentage = document.getElementById("discount-percentage");
const submitButton = document.getElementById("submit-button");
const banner = document.getElementById("banner");
const form = document.getElementById("priceForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const basePriceInput = Number(basePrice.value.trim());
  const discountPercentageInput = Number(discountPercentage.value.trim());
  if (basePrice.value.trim() === "" || discountPercentage.value.trim() === "") {
    banner.innerHTML = `<p>Enter valid numbers</p>`;
    return;
  }
  const discountPrice = (discountPercentageInput / 100) * basePriceInput;
  const finalPrice = basePriceInput - discountPrice;
  banner.innerHTML = `<p>You saved ₹${discountPrice}! Final Price: ₹${finalPrice}.</p>`;
});
