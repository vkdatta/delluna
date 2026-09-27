export const name="cherries-fill";
export const id="dl_48d6d8c278f64ecc8e32";
export const url=new URL("../icons/cherries-fill.svg?v=b6c5454c3cd6f5e1625ca2e19969b450e9bf87a4e3e2137bc9bc2d8c637a1b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
