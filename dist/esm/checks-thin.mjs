export const name="checks-thin";
export const id="dl_9d8cc23325da46f49f99";
export const url=new URL("../icons/checks-thin.svg?v=126cba68c29f4b7d5eb17a790d0391a4d7ec2364af85a7cb4a2e460bb0e0f2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
