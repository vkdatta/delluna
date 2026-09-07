export const name="number-seven-duotone";
export const id="dl_8d1a62b5d5f3450b8312";
export const url=new URL("../icons/number-seven-duotone.svg?v=8c031b1e30fe71492fb75780f1396a22b00757ed5cac63b977e69bcb3b6d42b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
