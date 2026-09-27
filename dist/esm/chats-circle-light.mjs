export const name="chats-circle-light";
export const id="dl_cdd1d473628d405d8d13";
export const url=new URL("../icons/chats-circle-light.svg?v=52d9e6c29aa99946cd96444cd1553ef79dc9fdb12af9c45bfd9baa6ce19caf61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
