export const name="rainy_heavy-fill";
export const id="dl_4edf43ff463034320293";
export const url=new URL("../icons/rainy_heavy-fill.svg?v=88fd5c59f57843cc906a024ff5edcad1d90caa8ab2730b7db5c591e634706c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
