export const name="upload-duotone";
export const id="dl_1d61fb9e636543018d15";
export const url=new URL("../icons/U/upload-duotone.svg?v=ac08360b76c8205dfb3878e86646a2fe95b0fa5b22ff3536631e437b3b054b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
