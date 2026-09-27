export const name="arrow-bend-double-up-left-bold";
export const id="dl_0caa5344f5794d7e82cd";
export const url=new URL("../icons/arrow-bend-double-up-left-bold.svg?v=d591bbfd7b99f977c820fe171a701c908f60daa102e21863698f2bc1711b3d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
