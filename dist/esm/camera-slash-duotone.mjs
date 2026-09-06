export const name="camera-slash-duotone";
export const id="dl_acac8b797e754aa3a5bd";
export const url=new URL("../icons/camera-slash-duotone.svg?v=a7b8d29c33a518cd6be224a7bd327141accea6e04578e88e7b56f523cd3d91b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
