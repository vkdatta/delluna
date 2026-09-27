export const name="hevc-fill";
export const id="dl_f8fc08812db982ef3dfa";
export const url=new URL("../icons/hevc-fill.svg?v=ada36a0e2d5a7d33f39c8a86cb59242b3049f0650c678d50af170dc4672cc90f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
