export const name="linked_camera-fill";
export const id="dl_37de8cfd2a404592dc50";
export const url=new URL("../icons/linked_camera-fill.svg?v=6220408ad59a55046fcd33482914a3e878fb01c43514fc10e36e941d476f4216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
