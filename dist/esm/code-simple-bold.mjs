export const name="code-simple-bold";
export const id="dl_f21b175e7d734c2dab08";
export const url=new URL("../icons/code-simple-bold.svg?v=ac0ae814507e3f6cfb75fc53571430dba803166e97fdc80240cf0f3d5d36c873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
