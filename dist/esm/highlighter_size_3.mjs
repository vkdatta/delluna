export const name="highlighter_size_3";
export const id="dl_ba7362e1cb281dac1e89";
export const url=new URL("../icons/highlighter_size_3.svg?v=e16e7830ad5ab9b6f1d19fe3888b23c0a590c4ad897aa371c861796e062e2413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
