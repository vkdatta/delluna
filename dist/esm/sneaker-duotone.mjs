export const name="sneaker-duotone";
export const id="dl_c038dcfd99d179b4d943";
export const url=new URL("../icons/sneaker-duotone.svg?v=89606c6c8bd35893b3ef7b971c27dd4117c86d90e1436b83912887c6736d05ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
