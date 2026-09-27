export const name="hourglass_top";
export const id="dl_bf5e91a937e6f027f246";
export const url=new URL("../icons/material_symbols/hourglass_top.svg?v=42df7448db8739a9f85be00a178011534455732c7732c6778dfb18f0573fc00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
