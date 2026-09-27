export const name="fullscreen_exit-fill";
export const id="dl_789c586d81c9c57f6b98";
export const url=new URL("../icons/fullscreen_exit-fill.svg?v=2a4e06d9724acbbd0b200c13c592b5ee226d832fff731887142d14b8ad1271ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
