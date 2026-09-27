export const name="luggage";
export const id="dl_63dde01a7a20392f7319";
export const url=new URL("../icons/luggage.svg?v=16a40dcea34219cf76136e0af9138bb9b8a906f35113adfdef3e189e6d201407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
