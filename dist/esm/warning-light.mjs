export const name="warning-light";
export const id="dl_0d9eeda95a4c90c515c8";
export const url=new URL("../icons/warning-light.svg?v=62ed0d3ff4272a0e975a617a2af99d3e93c6dc0e314c4cb2d82e0a5bae652598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
