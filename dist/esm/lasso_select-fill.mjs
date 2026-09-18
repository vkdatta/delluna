export const name="lasso_select-fill";
export const id="dl_8d2fc27a750f474da2db";
export const url=new URL("../icons/L/lasso_select-fill.svg?v=0cf0a9c013fdee71ca263f09cce33b5577d05e839f82c1a0410d99e03296bb1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
