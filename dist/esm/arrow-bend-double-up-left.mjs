export const name="arrow-bend-double-up-left";
export const id="dl_ebc143a812274120a666";
export const url=new URL("../icons/arrow-bend-double-up-left.svg?v=d9002adb68990e663dc2511119160eab63ddce140e95dc6598e69b53870f9af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
