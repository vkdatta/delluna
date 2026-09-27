export const name="power_settings_new-fill";
export const id="dl_e8c0ab0e708056ac4910";
export const url=new URL("../icons/power_settings_new-fill.svg?v=5d2da85027704adb3cfb9f75719a9c2ee488ede989ebc232c7ac5463ed6656ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
