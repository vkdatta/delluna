export const name="user-circle-dashed-light";
export const id="dl_ae27e17d4e2ea9b45d3d";
export const url=new URL("../icons/user-circle-dashed-light.svg?v=34b17b9e355116a87f04404c1fed7a10853580aff93a7ca563fdb840f777f6c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
