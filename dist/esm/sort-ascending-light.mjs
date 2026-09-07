export const name="sort-ascending-light";
export const id="dl_2046966273c24375a59d";
export const url=new URL("../icons/S/sort-ascending-light.svg?v=3c75d1f8775d116579f768b53f69f8cf7e970d79c2a222d9ddce9c176c5111c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
