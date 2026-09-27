export const name="wounds_injuries-fill";
export const id="dl_67195e25d1014fa70228";
export const url=new URL("../icons/wounds_injuries-fill.svg?v=3a8fde6af0486f9c5b78396a7849de2bc8012ccbcc9bab063c8eefaf97a38b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
