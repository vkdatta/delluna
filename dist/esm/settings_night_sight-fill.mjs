export const name="settings_night_sight-fill";
export const id="dl_c4276208db3e4bb2a7ab";
export const url=new URL("../icons/settings_night_sight-fill.svg?v=c1ed709b1871c2be4c319f8f9276a2a5fca3770dd2d7dc3af187e544e3e3e12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
