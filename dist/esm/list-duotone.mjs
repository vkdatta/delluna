export const name="list-duotone";
export const id="dl_a408ef28af164ec7bf5f";
export const url=new URL("../icons/list-duotone.svg?v=aad99dc6dd7b8d61eccf4092c413325833155a837b1e004f2cf2e1b9be9d4a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
