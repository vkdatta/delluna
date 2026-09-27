export const name="blur_linear";
export const id="dl_44cba71e397bc85a621d";
export const url=new URL("../icons/blur_linear.svg?v=f68a6d0d06af1d185178525f5dc9e5a965b8787670ff3b628fc9d491195c977e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
