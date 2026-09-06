export const name="pipe";
export const id="dl_3abf7cf2218f4ff6ae1c";
export const url=new URL("../icons/pipe.svg?v=0f90790e0739ac0bc4cc65ab5b3489391ec41b05e1e6b16e60b16536430197b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
