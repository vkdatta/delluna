export const name="keyboard_capslock_badge";
export const id="dl_6506845565ba05e20115";
export const url=new URL("../icons/keyboard_capslock_badge.svg?v=678067574dd71af151062194d98109267de02bf8ce301e0fdcc750e2e52a2308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
