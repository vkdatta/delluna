export const name="3g_mobiledata_badge";
export const id="dl_c64a567f49d34d1ead31";
export const url=new URL("../icons/3/3g_mobiledata_badge.svg?v=358c0ae18ffa8e5bf34f15d58f2c728e96dc72af7b2dfeb73e60b6dcbb012761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
