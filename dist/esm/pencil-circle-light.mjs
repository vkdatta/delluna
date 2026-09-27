export const name="pencil-circle-light";
export const id="dl_85bc4ce7d00a4bfe8948";
export const url=new URL("../icons/pencil-circle-light.svg?v=a3eb4df8db6a64eb30f13f46b8962a3448496b3cd6dac20112eb52846d221864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
