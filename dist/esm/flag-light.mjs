export const name="flag-light";
export const id="dl_60b0937d9ed14f3bb1bf";
export const url=new URL("../icons/flag-light.svg?v=e675a51ebc15ac3fdf77d629695b0a81c553813f7e8f2e394b655a4309c93054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
