export const name="videocam";
export const id="dl_f3ad50abf98743e8aed0";
export const url=new URL("../icons/V/videocam.svg?v=ea0bf66f191faffd481166a9c5697f7d5ddaff5ea2275b4c6b143b71a1ad529c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
