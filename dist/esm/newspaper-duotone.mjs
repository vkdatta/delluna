export const name="newspaper-duotone";
export const id="dl_9ab64698680849faa5ca";
export const url=new URL("../icons/newspaper-duotone.svg?v=67303aa2f4be428ddf6546e8c6d5d68e412406c3f98179fa8b567ac9b60819dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
