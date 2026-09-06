export const name="alien-duotone";
export const id="dl_933ffacd29b7453185e2";
export const url=new URL("../icons/alien-duotone.svg?v=bfa965919ce06f273c6aed34d5487b696f9eaa0868cb86503f26b55de29f7beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
