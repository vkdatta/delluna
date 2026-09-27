export const name="wave";
export const id="dl_88fb564deb76431cb113";
export const url=new URL("../icons/wave.svg?v=2abc8111b3fc3ada70303dae5278fd95ad9c74aa67f35ac77af966b1a6476637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
