export const name="draw_abstract";
export const id="dl_f32b79ec4c1a6a6b31e1";
export const url=new URL("../icons/draw_abstract.svg?v=f0874141d1450e061de95727d52b7393922652e56e1e2d635a3f30d65fba9811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
