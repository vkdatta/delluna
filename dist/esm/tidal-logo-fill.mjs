export const name="tidal-logo-fill";
export const id="dl_27b3d8b3b2cf180850f5";
export const url=new URL("../icons/tidal-logo-fill.svg?v=cb8848c9bc72ce7fbd5d9a3da6221cba4324d4ca04debe4d371b31bafac77960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
