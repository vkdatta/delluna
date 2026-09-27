export const name="local_shipping";
export const id="dl_cd52d9a6d49ec66a780b";
export const url=new URL("../icons/local_shipping.svg?v=3cea51e5fe5abb54adbe231158b492130ea2607d59549719515f66d492a4da7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
