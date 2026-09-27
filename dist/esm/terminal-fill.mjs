export const name="terminal-fill";
export const id="dl_8b6806f4c783b108d2c3";
export const url=new URL("../icons/terminal-fill.svg?v=6f7145f63d9199c643d1d6469875071a7d541ba9f4c1d797ee35838c19ab99ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
