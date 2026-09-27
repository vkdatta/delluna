export const name="audio_capture-fill";
export const id="dl_8c834f9c7633d48e813d";
export const url=new URL("../icons/audio_capture-fill.svg?v=3e950bc7749e441920be4782cf601c2de560e1ef442f34164334d91f833e756d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
