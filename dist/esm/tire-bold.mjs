export const name="tire-bold";
export const id="dl_e686e086003c47988153";
export const url=new URL("../icons/T/tire-bold.svg?v=1d03b5387d3931d0cdcd7077abc4a091424129bdb20072c300860c40c3cabb31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
