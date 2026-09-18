export const name="circle_notifications-fill";
export const id="dl_7b2d4271de9d49bead84";
export const url=new URL("../icons/circle_notifications-fill.svg?v=3e19b1ff30cc2080c3ab6153df3af65b5092ea8a1bf886a7a2def70ad8fb2dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
