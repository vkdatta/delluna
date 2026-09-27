export const name="motion_play";
export const id="dl_cb2bafa9784a02517c3a";
export const url=new URL("../icons/motion_play.svg?v=15c06627ff6b8f826a114068a72d71100aea712b356f629ef86f0201b0f945a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
