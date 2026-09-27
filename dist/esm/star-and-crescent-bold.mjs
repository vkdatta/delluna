export const name="star-and-crescent-bold";
export const id="dl_23b1560d9ce4eb18b2d4";
export const url=new URL("../icons/star-and-crescent-bold.svg?v=ed875453c1f336bc02e4fd0464caa767b5bf01bc7b30cc855d9e26ce59a8a1f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
