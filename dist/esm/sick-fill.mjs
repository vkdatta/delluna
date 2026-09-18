export const name="sick-fill";
export const id="dl_55f778ae0418474c97a7";
export const url=new URL("../icons/sick-fill.svg?v=b3212770e182695b050b9a2a28ef01741d0b84666d955a6f65a675376e9d8b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
