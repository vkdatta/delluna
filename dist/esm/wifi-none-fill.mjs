export const name="wifi-none-fill";
export const id="dl_5716657598029bf4abb2";
export const url=new URL("../icons/wifi-none-fill.svg?v=aaf992b135929b15104d48e587519de7db5bab7af2529dbf3ac0e41a6f22d1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
