export const name="list-dashes-duotone";
export const id="dl_347d552a2f50413d8b6c";
export const url=new URL("../icons/list-dashes-duotone.svg?v=5250d067a31902b520e0f2a23679f43f1c47df9ea4bd00c90a2c86acd4d82b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
