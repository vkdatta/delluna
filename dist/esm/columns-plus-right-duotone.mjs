export const name="columns-plus-right-duotone";
export const id="dl_6b748a4f004f40c486eb";
export const url=new URL("../icons/columns-plus-right-duotone.svg?v=d6c296c0981256970827c27c009634543178357ab05519f54be3d11e93fa8bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
