export const name="pencil-line-duotone";
export const id="dl_49beee9282854832a81a";
export const url=new URL("../icons/pencil-line-duotone.svg?v=1f9d6e4bf93778b443eb39628c0785a849632d158df229edb89530ef305b0a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
