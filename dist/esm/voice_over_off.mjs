export const name="voice_over_off";
export const id="dl_cabaa6203ca3446ca033";
export const url=new URL("../icons/V/voice_over_off.svg?v=f8248036f043c240ffb4da471a65174bb5989f947c4ed44b44ad445b30f82aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
