export const name="beach_access";
export const id="dl_e288f5b8654e5288da70";
export const url=new URL("../icons/beach_access.svg?v=2c10dbf3513f0f5a66b3d203f4832906d6602251ba895fffc680631f4a7fc1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
