export const name="shield-plus-bold";
export const id="dl_746cf51fb7425a8a3d6f";
export const url=new URL("../icons/shield-plus-bold.svg?v=e45461f0cead9175329c06825f52ca36be257ef884b657c9a88011bf9893444f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
