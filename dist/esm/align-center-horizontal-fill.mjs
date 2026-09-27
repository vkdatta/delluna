export const name="align-center-horizontal-fill";
export const id="dl_b43320f4da8142ca9493";
export const url=new URL("../icons/align-center-horizontal-fill.svg?v=29034fb532d4a0a168a56834448579724d4167ce98801d27d6c0d1d2df63a952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
