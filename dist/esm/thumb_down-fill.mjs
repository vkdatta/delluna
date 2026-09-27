export const name="thumb_down-fill";
export const id="dl_47b8addf952380d73939";
export const url=new URL("../icons/thumb_down-fill.svg?v=e0f3f4cd9a7fb10b278ae6e4ab592199141efc3c78f63261e6fb7f0de6d18036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
