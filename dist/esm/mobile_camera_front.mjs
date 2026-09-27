export const name="mobile_camera_front";
export const id="dl_268b331c290483d0ece0";
export const url=new URL("../icons/mobile_camera_front.svg?v=bf80ad6ddec79a60f8f2f04960c7ae1c3f12aea8f42df8452108bfd34e59effa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
