export const name="view_timeline";
export const id="dl_4f589dd2ea6111cc892b";
export const url=new URL("../icons/view_timeline.svg?v=1c84945b79e3d9cf701aec7252bd0aa0102465c5ce2d8dcf256865f6fd95b743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
