export const name="barcode-fill-classic";
export const id="dl_eb50539f5a844b8193fc";
export const url=new URL("../icons/barcode-fill-classic.svg?v=d75510da00e161b202f9ccd0cd506e32821c73720f63f77e51da6f0b62b2dbc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
