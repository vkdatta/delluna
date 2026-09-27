export const name="cell-tower-fill";
export const id="dl_8b5a8c6b9b104d948ac4";
export const url=new URL("../icons/cell-tower-fill.svg?v=929942e4572aa6639889cb905a873bcf5cf053ea7da1be5b291314ad6507eac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
