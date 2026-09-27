export const name="settings_slow_motion-fill";
export const id="dl_4b2726061e73d7ebca7a";
export const url=new URL("../icons/settings_slow_motion-fill.svg?v=6dc19d16ecf1373cd357bb57f6e78d533bc820c6267bbe21fff35c0bf94fdbad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
