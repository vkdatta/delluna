export const name="lucid_1-backpack";
export const id="dl_3f81dc893ee748a7b856";
export const url=new URL("../icons/lucid_1-backpack.svg?v=afa0ca97b051df7b86109eb60f757d1d93452fb0a8901dd7685f71b28d7cbd80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
