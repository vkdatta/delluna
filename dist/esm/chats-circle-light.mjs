export const name="chats-circle-light";
export const id="dl_cdd1d473628d405d8d13";
export const url=new URL("../icons/chats-circle-light.svg?v=205480658375e539a8c1d7ee3bfdd701c70d9f411fe7f5881456bd7be124366a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
