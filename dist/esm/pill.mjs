export const name="pill";
export const id="dl_08eb62b04494427cbf37";
export const url=new URL("../icons/pill.svg?v=c7b92bf7c0156fd99ac3e1e2139a94bb869b9b98aafa71b220a86fd571c68b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
