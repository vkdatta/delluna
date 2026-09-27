export const name="desktop_cloud_stack-fill";
export const id="dl_3e9ca61bb0299522e01f";
export const url=new URL("../icons/desktop_cloud_stack-fill.svg?v=b2d5a17dbb31dd4ece817436eeadbd5bfe1e6c1de03ea69510ac16f16178344d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
