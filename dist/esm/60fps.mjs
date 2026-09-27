export const name="60fps";
export const id="dl_226ec5b8f0111ec18256";
export const url=new URL("../icons/60fps.svg?v=fb95fc2ba37d9ff79463d5d15271ba99ae6446a717777bec7500374d1e27fc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
