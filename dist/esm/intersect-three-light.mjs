export const name="intersect-three-light";
export const id="dl_9fc235f932534f4d8ef6";
export const url=new URL("../icons/intersect-three-light.svg?v=d38708826db90fe6a5851cd658abb263910a8c99787f50e269481a6ae2d91e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
