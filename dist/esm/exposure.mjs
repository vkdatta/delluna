export const name="exposure";
export const id="dl_3747c0fc3ac77381af42";
export const url=new URL("../icons/exposure.svg?v=6a8088039adac5e9b0d7955b0e068a847f31cb3d633fd4502bc01984852639fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
