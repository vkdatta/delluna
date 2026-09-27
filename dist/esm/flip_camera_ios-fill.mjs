export const name="flip_camera_ios-fill";
export const id="dl_5fba63a06468f42520f6";
export const url=new URL("../icons/flip_camera_ios-fill.svg?v=2b22664345e6a56b65f4185e9c693fe6231271bd3d51a24c5cf075df4a1630d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
