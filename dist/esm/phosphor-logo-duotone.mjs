export const name="phosphor-logo-duotone";
export const id="dl_5f375ec690ba4ce9a9c6";
export const url=new URL("../icons/phosphor-logo-duotone.svg?v=5902793e6e1fd7d0cec73455c1ff423e2dd6df876569f68d7a5676265b3d7c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
