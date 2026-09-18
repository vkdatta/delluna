export const name="match_case-fill";
export const id="dl_f03d4f00985e4a7cab96";
export const url=new URL("../icons/match_case-fill.svg?v=f864af9a89baf92f2ee6b907a0f6a30acc4f6e16ac5bdb5bcfd0da96fd48114d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
