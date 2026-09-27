export const name="settings_panorama-fill";
export const id="dl_47bbbbeb1fd6fba57641";
export const url=new URL("../icons/settings_panorama-fill.svg?v=78cc7e0be881d9ce039c447b19c10c768db9c67ba79bb49e6332c8d59b4ef9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
