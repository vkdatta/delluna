export const name="google_home_devices-fill";
export const id="dl_373193a936f943abbef9";
export const url=new URL("../icons/google_home_devices-fill.svg?v=4a0e95686540eea37dcede3b8b9ed789e3731d1e8e73f633340f3662d530ffe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
