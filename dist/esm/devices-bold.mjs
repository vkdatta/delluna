export const name="devices-bold";
export const id="dl_4079742735a642f685fc";
export const url=new URL("../icons/devices-bold.svg?v=6143495c2d5bd39820f66a98b0e86c6275060e280d97600ebb2ebecb4f88d6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
