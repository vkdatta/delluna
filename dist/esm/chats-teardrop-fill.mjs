export const name="chats-teardrop-fill";
export const id="dl_e1612859c0a94c45a95a";
export const url=new URL("../icons/chats-teardrop-fill.svg?v=ce8a63aa26f4643d7ecc7fd00c763db9b65c0d0a6384c3e48b4ad6c7e13260f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
