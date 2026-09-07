export const name="user-cog";
export const id="dl_e058e0d184c1496ab652";
export const url=new URL("../icons/user-cog.svg?v=21f4832477e97b35966702a7dbedc669570c6382d4148cc40c538c78c8997670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
