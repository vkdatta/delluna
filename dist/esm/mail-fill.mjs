export const name="mail-fill";
export const id="dl_8eb1940811bb671c6e4e";
export const url=new URL("../icons/mail-fill.svg?v=70079fe735bb97724ff380911da71322b0b16945489fcffd6c8ad34d4cf09888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
