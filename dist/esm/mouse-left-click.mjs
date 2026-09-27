export const name="mouse-left-click";
export const id="dl_36adfc5458bb449b9d1a";
export const url=new URL("../icons/mouse-left-click.svg?v=5e91201f3ec8e33ba3f788417f3ed2ffc8dc5296684275a3eeec1c89f469f783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
