export const name="mobile_camera_front-fill";
export const id="dl_d35969d7f93b34dbb943";
export const url=new URL("../icons/mobile_camera_front-fill.svg?v=056f16a0f2adfa66a5005c982cd60a1ac80d4c0025e7448de213e4268773b543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
