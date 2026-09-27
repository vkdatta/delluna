export const name="octagon";
export const id="dl_34b6d5c65b2d473caf27";
export const url=new URL("../icons/octagon.svg?v=a1726bc7981c674fe58aebe44ae4c89196222a751546c8837f0889e3f1702320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
