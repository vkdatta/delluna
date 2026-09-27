export const name="music-notes-light";
export const id="dl_e90759fdc8a24ced94e3";
export const url=new URL("../icons/music-notes-light.svg?v=2bb3a45c3876aa8d0a6bb0f892a5ad4783c76edf38418742e92255eabcae8533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
