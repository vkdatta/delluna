export const name="link-simple-break-fill";
export const id="dl_5a2ca645c57049068078";
export const url=new URL("../icons/link-simple-break-fill.svg?v=87d0a4e06ea950d2c76e9571026806e8811332502c2ec2c3661483734e0e445d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
