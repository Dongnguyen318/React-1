/** @format */

export const ProductDetail = ({ data }) => {
  console.log(data);
  const { id } = data;

  return `
    <h1>Product Detail: ${id}</h1>
    <br>
    <button class="btn" onclick="navigateTo('/products')">Back</button>
    
  `;
};
