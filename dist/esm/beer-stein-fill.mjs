export const name="beer-stein-fill";
export const id="dl_8a7fa307ea6a48bea322";
export const url=new URL("../icons/beer-stein-fill.svg?v=a9ea2e0b7a9148ee63142699b2a997c1ae42b0f486d659ac19553ae36399cb5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
