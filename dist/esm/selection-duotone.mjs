export const name="selection-duotone";
export const id="dl_9897710444574229faa7";
export const url=new URL("../icons/selection-duotone.svg?v=b9519d78d9e841da107bb871ee25d437bf629234a5fece34df784e10f135be85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
