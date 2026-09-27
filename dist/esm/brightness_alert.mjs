export const name="brightness_alert";
export const id="dl_655826924c1dd55dee23";
export const url=new URL("../icons/brightness_alert.svg?v=b36fb405d64033f5cf3fe8d9a8dbf686928b620e1b4fceb75a3653053160a43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
