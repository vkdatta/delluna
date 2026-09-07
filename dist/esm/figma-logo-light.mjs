export const name="figma-logo-light";
export const id="dl_e43f691def714b9b94a9";
export const url=new URL("../icons/figma-logo-light.svg?v=2e7fc4e3cc42bce793e4f8967a3d0caa3a38ecd522f89d10fb897e4e564063d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
