export const name="steering-wheel-duotone";
export const id="dl_63333d301a6443a4bb35";
export const url=new URL("../icons/S/steering-wheel-duotone.svg?v=992a9b05ab811127fb059e044a4b4293981c0b73db3676d8a3d955ea2d485490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
