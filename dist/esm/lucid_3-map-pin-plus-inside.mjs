export const name="lucid_3-map-pin-plus-inside";
export const id="dl_6ceee32f84b9495e9bcc";
export const url=new URL("../icons/lucid_3-map-pin-plus-inside.svg?v=51724e88ae2ec1fcdca6f6ba0ea7010e0632d8b8808b5489f94907514537730c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
