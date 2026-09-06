export const name="lucid_1-archive-x";
export const id="dl_21b8d986d61244e99998";
export const url=new URL("../icons/lucid_1-archive-x.svg?v=a526b942cffc249de3b61d0dc9f6ec9802783e9ca8b8358c7a54736fe64bf1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
