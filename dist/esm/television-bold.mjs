export const name="television-bold";
export const id="dl_6bf5696007e5cf4fb83d";
export const url=new URL("../icons/television-bold.svg?v=52c9d7184f9ed3a6afa1524e174438b2b99bc12b74cd81d5df1e5f05ce01f311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
