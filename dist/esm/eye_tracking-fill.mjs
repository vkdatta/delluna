export const name="eye_tracking-fill";
export const id="dl_3723b171fa7742ba8cf4";
export const url=new URL("../icons/eye_tracking-fill.svg?v=00a5e69dcdb12e68960a28cbe41e3ac86cb592fb8b8fe425f379f2587376300e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
