export const name="art_track-fill";
export const id="dl_b377818cf3b1bcfc3619";
export const url=new URL("../icons/art_track-fill.svg?v=9af6ae42cec7b170549b36768094586a5d7a4a2a332390a7eb45def1689d3d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
