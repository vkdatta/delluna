export const name="call_end-fill";
export const id="dl_07edd52f862025da3cd5";
export const url=new URL("../icons/call_end-fill.svg?v=85fc8512a024bf92fc535605bbc2e0d4ed9761dcff3282669eed6a913172d791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
