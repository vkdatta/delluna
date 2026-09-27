export const name="toc-fill";
export const id="dl_031b0db859ac3523a1b1";
export const url=new URL("../icons/toc-fill.svg?v=ed9216c4c6b71ea4d42d65849f7336df71c01b35479cca0339946fe84299d55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
