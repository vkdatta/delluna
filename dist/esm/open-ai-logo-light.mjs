export const name="open-ai-logo-light";
export const id="dl_e62d4a29d31047d98f39";
export const url=new URL("../icons/open-ai-logo-light.svg?v=1179ffa2038fe9e5ab14f461ec3005bf3d8b395a8330988ad18dd45cac30d330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
