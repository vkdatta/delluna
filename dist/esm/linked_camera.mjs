export const name="linked_camera";
export const id="dl_fec7cd5dc4c63cbe189b";
export const url=new URL("../icons/linked_camera.svg?v=6c55e0495abb504b9b9df5a6fe2eb2c5304ab1c02f7eaa7f1561068e898d7873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
