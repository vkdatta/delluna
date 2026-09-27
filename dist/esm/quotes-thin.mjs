export const name="quotes-thin";
export const id="dl_607ddf085c0e45ba8bdc";
export const url=new URL("../icons/quotes-thin.svg?v=bf6340fbf294951ad62a0ef290a79d3ddf5f6e836f86ef3f4bdc4db1951d66d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
