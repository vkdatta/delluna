export const name="dress";
export const id="dl_4a08524b0306442c84ba";
export const url=new URL("../icons/dress.svg?v=9adf749009d2735ef7c5efe0d9cc7881da3716e8327be204e700cebbc4770b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
