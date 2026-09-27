export const name="temp_preferences_eco-fill";
export const id="dl_cda673b349b54795d150";
export const url=new URL("../icons/temp_preferences_eco-fill.svg?v=13c509a5669705d80bc65fc7089e20e9e62b65d0bc8b9ee41cf1ca9f7843f5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
