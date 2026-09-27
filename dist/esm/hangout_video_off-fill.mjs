export const name="hangout_video_off-fill";
export const id="dl_6539cc7ceffe8f25f185";
export const url=new URL("../icons/hangout_video_off-fill.svg?v=bb031f966165c3c17a13c4030a738ca3e753564084c540decd071ce19efeae9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
