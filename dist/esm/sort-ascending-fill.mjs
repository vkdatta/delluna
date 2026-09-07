export const name="sort-ascending-fill";
export const id="dl_4e40f9b89ea24e43855f";
export const url=new URL("../icons/S/sort-ascending-fill.svg?v=35c66f6f456bd5b3f49d2930bb13c567228d20352e7d498af9e12c316b972425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
