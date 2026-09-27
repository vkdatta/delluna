export const name="chats-circle-light";
export const id="dl_cdd1d473628d405d8d13";
export const url=new URL("../icons/chats-circle-light.svg?v=8c1180cc81af90e37da7af603f47bd1c912ccab8dbb4ade6db9c7f16a0f1ef49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
