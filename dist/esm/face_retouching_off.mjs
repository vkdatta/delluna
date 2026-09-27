export const name="face_retouching_off";
export const id="dl_a666d00a4d5004e0bbb5";
export const url=new URL("../icons/face_retouching_off.svg?v=bb7a8dd5175e5f2e0f74a2531a1a239e7a55f8289801e149fbb4e4734f901f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
