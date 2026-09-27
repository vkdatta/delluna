export const name="face_3-fill";
export const id="dl_4d4bd7db21c60652b157";
export const url=new URL("../icons/face_3-fill.svg?v=123fa71be79544a15df4ae79f094cf57d2d6e06084b49deb5ba01948f085c2da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
