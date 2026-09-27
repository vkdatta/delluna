export const name="rainbow-fill";
export const id="dl_f45ddd9e11344897b5d9";
export const url=new URL("../icons/rainbow-fill.svg?v=6bf01dab4b6f39b1f175271a4d0bc30768d5768832581bc8096b0e593242a847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
