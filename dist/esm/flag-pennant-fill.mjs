export const name="flag-pennant-fill";
export const id="dl_d3a1597b9ee0466fbb34";
export const url=new URL("../icons/flag-pennant-fill.svg?v=322b5a92c0c6249afe4535763177bf621983c0b00a12f289c3a3fade74186d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
