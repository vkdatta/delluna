export const name="account_box-fill";
export const id="dl_e39985bd857453561219";
export const url=new URL("../icons/account_box-fill.svg?v=ee2cd0fbb2c2879c5759d4371128da8212c845732f6b4a9decd79ec7d36cc5dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
