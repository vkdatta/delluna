export const name="lucid_2-hotel";
export const id="dl_685e53f2b32144a2a77f";
export const url=new URL("../icons/lucid_2-hotel.svg?v=b3b8d22d8e8f80620503097a28d99d9daeb151949ff9dbb7ce0fc54907d79385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
