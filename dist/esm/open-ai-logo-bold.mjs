export const name="open-ai-logo-bold";
export const id="dl_e05488d14e1c459582a5";
export const url=new URL("../icons/open-ai-logo-bold.svg?v=4a423573a6ceeb02b8e210e18110ef1f56154a2dc50545716bc396a7906fa76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
