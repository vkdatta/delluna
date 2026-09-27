export const name="ice-cream-thin";
export const id="dl_733e587f11ef46699f95";
export const url=new URL("../icons/ice-cream-thin.svg?v=f28283461c70ef958ffd4a65a48a5ddc1c8bd8db1164a1696ec7a87980eb81bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
