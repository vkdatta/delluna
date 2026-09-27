export const name="arrow-u-right-down-light";
export const id="dl_420bcbf52cae43c6b188";
export const url=new URL("../icons/arrow-u-right-down-light.svg?v=57ea4e1c0e6e770e2e57eef395d121432ef67a8d3642d27b13e54e8052017dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
