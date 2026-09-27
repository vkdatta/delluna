export const name="star-and-crescent-light";
export const id="dl_719a4223b3596ff2c24e";
export const url=new URL("../icons/star-and-crescent-light.svg?v=470576a18658c18869d0cf93ce93801d74c2a438741db1cbf73932efd2091913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
