export const name="camera-duotone";
export const id="dl_52b4408358ce4a83afea";
export const url=new URL("../icons/camera-duotone.svg?v=16aab74ac3605daf0b2b55f2eb5cea741f42a0a49894e4fd1c1211bfeb7e1f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
