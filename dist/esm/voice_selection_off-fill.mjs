export const name="voice_selection_off-fill";
export const id="dl_3d4a6e7cc9cfe335c422";
export const url=new URL("../icons/voice_selection_off-fill.svg?v=7d00de6895a2d83f3a1d4330583752f1653ec4f64e2f0e8ec1cef3e8a2924b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
