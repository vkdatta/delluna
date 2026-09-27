export const name="total_dissolved_solids-fill";
export const id="dl_86a1eee0265f8d543f4f";
export const url=new URL("../icons/total_dissolved_solids-fill.svg?v=c3d9519b3c1f568d50c829ce40523bfcd532d1d874328f0451652c1f54ea864c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
