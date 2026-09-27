export const name="location_searching";
export const id="dl_f36bff16a3a87862e332";
export const url=new URL("../icons/location_searching.svg?v=9b9acabbeb1d9cbb5df42fb3e3304808245f922daa84b28cd620bd4731162e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
