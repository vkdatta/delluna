export const name="arrows-in-line-horizontal";
export const id="dl_e5a8824c859d4e42aa08";
export const url=new URL("../icons/arrows-in-line-horizontal.svg?v=73d0df2946ad58d810e81f1b92a731c21674659135c4d40bb5ac29569a54d924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
