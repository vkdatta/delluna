export const name="wine";
export const id="dl_268ca4510ef84d8a8619";
export const url=new URL("../icons/W/wine.svg?v=b0978c00f0a02cbf6ea02cf7f12e6c5a6fa6621c1bcd6e20e8f72d83bc183ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
