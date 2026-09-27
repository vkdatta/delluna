export const name="sailing-fill";
export const id="dl_ac2d10dd219f9eed934f";
export const url=new URL("../icons/sailing-fill.svg?v=99f184ce31971a8a2ae816eb4aa581b3bf679c92da38f457373e82ab5565f608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
