export const name="camera_indoor";
export const id="dl_5b84434bc5da27eeac93";
export const url=new URL("../icons/camera_indoor.svg?v=862d07ffca2b67afea29a621d6bd95309f7f094b3ff9c6f7d7cb7c847a431be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
