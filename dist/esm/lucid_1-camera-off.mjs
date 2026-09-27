export const name="lucid_1-camera-off";
export const id="dl_78ddd291385e49efa659";
export const url=new URL("../icons/lucid_1-camera-off.svg?v=73744313f662adb3981ba4f37ae9545cfd25a4d2bbde072f09eac7f97081010d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
