export const name="lucid_2-heart-handshake";
export const id="dl_b36807da6a454a8abc5e";
export const url=new URL("../icons/lucid_2-heart-handshake.svg?v=591379bf00779b205394351657affd7cf1fafb256e86a02fedbc911d59b7ab41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
