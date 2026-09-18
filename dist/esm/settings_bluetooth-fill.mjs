export const name="settings_bluetooth-fill";
export const id="dl_0c65c196f8cc40d4a6c2";
export const url=new URL("../icons/settings_bluetooth-fill.svg?v=9f0a9d931318d9d340d1163c1c5658ba1645c2f7077ea0f5506567b1033cd251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
