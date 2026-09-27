export const name="barricade-light";
export const id="dl_dae4e460d09646c5a623";
export const url=new URL("../icons/barricade-light.svg?v=7c32b16feddcb0978b1115562bb43a9c917e9d5e493f4a437c5c58f46b9cafbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
