export const name="compass-light";
export const id="dl_8fafb5dca81e476e9b12";
export const url=new URL("../icons/compass-light.svg?v=990f1a238d74b830ed55c6977fefdc3c559abebaf429fddda51da1c38b0093d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
