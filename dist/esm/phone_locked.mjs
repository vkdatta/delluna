export const name="phone_locked";
export const id="dl_2653734925b1df9a4ec5";
export const url=new URL("../icons/phone_locked.svg?v=65cf823e6b333914e3093ff2e9cc3e120db870d2ffd378bbd7913f80ac5576bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
