export const name="minor_crash";
export const id="dl_242716884f4d44559fa0";
export const url=new URL("../icons/minor_crash.svg?v=507b36ec2a96f3cc703e6c314f60f0f73285b7a37f394571df3245ad1f414475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
