export const name="settings_voice-fill";
export const id="dl_d60a3f1ce89f153e30ca";
export const url=new URL("../icons/settings_voice-fill.svg?v=2a13531f0de71e3d2ad574e7720f947a4645f58b8c970fe5c2116e8087f2a7f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
