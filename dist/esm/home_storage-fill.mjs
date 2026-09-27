export const name="home_storage-fill";
export const id="dl_882fe9ff9e5937cc5164";
export const url=new URL("../icons/home_storage-fill.svg?v=6cfd6eb444b560660a6681ff0c14ea27f3ac3cab15441d9d2c423a3c4c3b4748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
