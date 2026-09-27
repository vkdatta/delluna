export const name="lucid_1-car";
export const id="dl_86a311e777034361bd5b";
export const url=new URL("../icons/lucid_1-car.svg?v=cd7d1229161c1ecbeff5422ac8bc21bf26ae3dcb398d6d1d9f5ff3e0bd513609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
