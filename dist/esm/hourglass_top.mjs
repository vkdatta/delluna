export const name="hourglass_top";
export const id="dl_1812ff0f4c604fdbe0b6";
export const url=new URL("../icons/material_symbols/hourglass_top.svg?v=964c13fb6483aaeb81c6a7e2d7d2ac5ba48a9240d0d841a3c688eee65c7fe4c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
