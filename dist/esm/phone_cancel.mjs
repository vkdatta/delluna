export const name="phone_cancel";
export const id="dl_b7727b44c69ee985d1ce";
export const url=new URL("../icons/phone_cancel.svg?v=662f41c305706be2a913a91950c7186ee613c6a6480f95c9b342a2c08ca726ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
