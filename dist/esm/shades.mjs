export const name="shades";
export const id="dl_5928a600bbe135bbe128";
export const url=new URL("../icons/shades.svg?v=dfeaa99ba1f5a88672eb3aae21c9efe377bad180cb1d588c115f7a3637c55005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
