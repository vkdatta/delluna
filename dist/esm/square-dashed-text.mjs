export const name="square-dashed-text";
export const id="dl_582e9bdb113c40fea097";
export const url=new URL("../icons/square-dashed-text.svg?v=98e37be4fdc2c640624c2388fde795a45b9d757cc7a3e1d1f724b8ebb1eb0d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
