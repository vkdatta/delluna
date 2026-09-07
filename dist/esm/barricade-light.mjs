export const name="barricade-light";
export const id="dl_dae4e460d09646c5a623";
export const url=new URL("../icons/barricade-light.svg?v=98a3c11070fdebac22ea0a60bb2beb94e9d0147790905c2e1bd9d592bd5df16d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
