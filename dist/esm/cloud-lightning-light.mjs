export const name="cloud-lightning-light";
export const id="dl_9195e24d8f5f4a488269";
export const url=new URL("../icons/cloud-lightning-light.svg?v=bf147421c071177efa3095e9ac260793f16d9f73206c9ff951a660c1725fa14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
