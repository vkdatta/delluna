export const name="chats-circle-duotone";
export const id="dl_d91361b33c9b45dc82d1";
export const url=new URL("../icons/chats-circle-duotone.svg?v=c4b1f79593f7c8f21bb8047502179b9a7a7a5f44a2cb00a58de908d429b886ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
