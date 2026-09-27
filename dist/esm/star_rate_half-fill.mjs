export const name="star_rate_half-fill";
export const id="dl_e5bdf6f73fd30e11e43c";
export const url=new URL("../icons/star_rate_half-fill.svg?v=5d9d5b9ae4afcc9619448b218649c4a11019b758867043513239d33c37280883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
