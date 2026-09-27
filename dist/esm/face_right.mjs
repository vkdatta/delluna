export const name="face_right";
export const id="dl_4285e5825a147f2bc4c4";
export const url=new URL("../icons/face_right.svg?v=4977dd4b5d4b930e60f01d208a157a97e414b236ca8976d5599d67c301ac7009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
