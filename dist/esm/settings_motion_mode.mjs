export const name="settings_motion_mode";
export const id="dl_d165b09028e2352a2b40";
export const url=new URL("../icons/settings_motion_mode.svg?v=863364fa4ea17ce93da2315f9b9a2bfaea134dcca4926fb094fba084abf0d039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
