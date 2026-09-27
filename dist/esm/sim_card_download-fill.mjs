export const name="sim_card_download-fill";
export const id="dl_c5c76eb71a360e6df71a";
export const url=new URL("../icons/sim_card_download-fill.svg?v=be91f4c25a3afe7ffa742d0a91c6edf48942ebb57c94d9ada3b9369f1c96e13b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
