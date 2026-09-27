export const name="device_swoosh_star-fill";
export const id="dl_9a5eec3fde5402b353d7";
export const url=new URL("../icons/device_swoosh_star-fill.svg?v=fe8c964ef93084c72c688e782f8a79fdcc6213170444a7082d0761d9131c8ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
