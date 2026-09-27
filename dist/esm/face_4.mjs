export const name="face_4";
export const id="dl_83644d44c2df6a0c8184";
export const url=new URL("../icons/face_4.svg?v=aba887de84844897bb83b8e78f65f5c6f3392f029f186c7bdb55f7827f6f00da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
