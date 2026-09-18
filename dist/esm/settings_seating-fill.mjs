export const name="settings_seating-fill";
export const id="dl_c2485e21e11e4bf191fa";
export const url=new URL("../icons/settings_seating-fill.svg?v=4edc4f89c858f6b3de620122e26e3618e95814502e16b74db179f056bb6a55bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
