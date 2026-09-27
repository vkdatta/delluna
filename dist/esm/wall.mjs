export const name="wall";
export const id="dl_45f0efb790e7443fe51d";
export const url=new URL("../icons/wall.svg?v=e59714eeb8100e4bea3160c3d4392b7d5589983fca788bf6223ed3b77f8ce66b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
