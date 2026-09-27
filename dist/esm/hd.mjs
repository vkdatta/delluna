export const name="hd";
export const id="dl_8e1452f39eeb066b749c";
export const url=new URL("../icons/hd.svg?v=b1c0fa271087e430e069c71de34805cf185a5656f98089c01187438f6c423223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
