export const name="lamp-bold";
export const id="dl_86d2650ebca849af825b";
export const url=new URL("../icons/lamp-bold.svg?v=817c1d565137cb685c7fa56a31add9164709570359730748a5d51062a2eb6062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
