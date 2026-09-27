export const name="eyebrow-fill";
export const id="dl_7c1a1740c25d9cf354a6";
export const url=new URL("../icons/eyebrow-fill.svg?v=2f98c1b353c6f23f607a34f50f4c56a2da9e0e4cba2d5b25fc7c7bd242bd2041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
