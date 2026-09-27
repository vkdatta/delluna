export const name="plus-square";
export const id="dl_a6c7206f61bf42d08a2f";
export const url=new URL("../icons/plus-square.svg?v=95668c89d42fb879f065ea634b8546f2a8da52ec76dc14058eac2cf3585eca70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
