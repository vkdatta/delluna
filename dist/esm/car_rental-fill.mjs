export const name="car_rental-fill";
export const id="dl_649b9016eb537f5f6232";
export const url=new URL("../icons/car_rental-fill.svg?v=e6f76d50b6a8d99a30b91cfc08a1547d29cc6efd2ad4e658ef4010acd54f81df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
