export const name="position_bottom_left-fill";
export const id="dl_37ffbccd30bf1336b6fc";
export const url=new URL("../icons/position_bottom_left-fill.svg?v=87400993ecdb86fd3f3050fd7ecabf8d0ce7ce5604c7f8adb87bcced9e469dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
