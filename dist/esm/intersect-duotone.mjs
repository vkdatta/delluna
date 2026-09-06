export const name="intersect-duotone";
export const id="dl_5a77f51777ce4d84b31b";
export const url=new URL("../icons/intersect-duotone.svg?v=bded9e42d34ac9fabf53cb50789009a728c77df5094f7d6b2b6f2d257509ca09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
