export const name="local_cafe-fill";
export const id="dl_a8356779184647e2bf9c";
export const url=new URL("../icons/local_cafe-fill.svg?v=ba7045e55497409f7c0a6a41d4e64f27166d51b371762384a2226e850cf2a980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
