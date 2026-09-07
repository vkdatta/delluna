export const name="brain-bold";
export const id="dl_27e449eb6ff1448ea752";
export const url=new URL("../icons/brain-bold.svg?v=d507ed00415a55f8968242d328a6ae3d5a6faab13abb4fee5aef68ba6383b2ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
