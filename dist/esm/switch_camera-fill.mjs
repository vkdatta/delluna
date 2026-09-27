export const name="switch_camera-fill";
export const id="dl_c8d30b01501a29d0692b";
export const url=new URL("../icons/switch_camera-fill.svg?v=2d18b64f66c3d0550fd8c6c75e84aedf5e7cc2c508f889755a1a5d8b32529b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
