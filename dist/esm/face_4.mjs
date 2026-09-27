export const name="face_4";
export const id="dl_9522f20afba701c2ebab";
export const url=new URL("../icons/face_4.svg?v=cfca6883d31726f67cb9e904ede4d3a10a4ee8b6d7be6d4fd07d6263be145ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
