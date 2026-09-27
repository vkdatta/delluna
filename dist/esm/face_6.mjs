export const name="face_6";
export const id="dl_b1a17f955c926d1902b8";
export const url=new URL("../icons/face_6.svg?v=8f4b3996455afeda5a4d2898b73ca11f0285d24fd853ce36df6ba2b789d78ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
