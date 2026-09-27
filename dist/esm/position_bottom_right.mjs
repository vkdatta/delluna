export const name="position_bottom_right";
export const id="dl_24c58102b71c59bc5e74";
export const url=new URL("../icons/position_bottom_right.svg?v=24ad5ef377db898c711ca04fa17704ace4ea576f33451a27a78d0fd4d51fd44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
