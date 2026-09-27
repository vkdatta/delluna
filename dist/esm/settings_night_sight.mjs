export const name="settings_night_sight";
export const id="dl_c40f193b22c1400765e9";
export const url=new URL("../icons/settings_night_sight.svg?v=2cc709d4eba098f67f3933daa72c1357e3fe1999a06c743dd33d2b8766a2a436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
