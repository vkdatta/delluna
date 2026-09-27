export const name="device-tablet-camera-bold";
export const id="dl_172386062a8a4398b2b6";
export const url=new URL("../icons/device-tablet-camera-bold.svg?v=902ec412367d3d1bec1556e2309f8fa1420c054bec8a3c10208078b028ea6710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
