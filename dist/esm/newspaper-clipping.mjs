export const name="newspaper-clipping";
export const id="dl_979895a0a7dd49eb91a8";
export const url=new URL("../icons/newspaper-clipping.svg?v=5e754f77228851abcf9a30590ca066a2dc4af2ea0812ed9c9ba7734e479c6824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
