export const name="elderly-fill";
export const id="dl_4e59e4028535aa6fee2a";
export const url=new URL("../icons/elderly-fill.svg?v=daa2d48b08822408581dfb01eab7e2b4dbb689dec4c449a67e0c7e289dc318e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
