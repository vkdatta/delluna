export const name="eject";
export const id="dl_ef56d691c4f64c9e9311";
export const url=new URL("../icons/eject.svg?v=d54bb0b355908d4a0be3f6af8320fbc5c77594e5ef2ddafaaf18f285a6f401e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
