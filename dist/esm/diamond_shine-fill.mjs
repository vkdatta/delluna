export const name="diamond_shine-fill";
export const id="dl_50abfa6e10f0829d908e";
export const url=new URL("../icons/diamond_shine-fill.svg?v=11f64d41941089d2b47b6a69f4ad50529fdde54e97760a6943934ab21e14280e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
