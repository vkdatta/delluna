export const name="dots-three-outline";
export const id="dl_9a944a49afe9401e820a";
export const url=new URL("../icons/dots-three-outline.svg?v=8176bf0fc72621c8f19f9e584301370201e90137a076f4a3c4922475ef5d9198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
