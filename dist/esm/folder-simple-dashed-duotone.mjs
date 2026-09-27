export const name="folder-simple-dashed-duotone";
export const id="dl_892683d7f7f34d2ca5d6";
export const url=new URL("../icons/folder-simple-dashed-duotone.svg?v=a1017f0f167aab86ccb2c2330dc97af21fb682a37fbfea46ad3bcb936b6af236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
