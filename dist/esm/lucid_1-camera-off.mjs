export const name="lucid_1-camera-off";
export const id="dl_78ddd291385e49efa659";
export const url=new URL("../icons/lucid_1-camera-off.svg?v=be03ac9ce30ffc0d9a92b8535176db6adfc0abece719cc80523b54e23b914859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
