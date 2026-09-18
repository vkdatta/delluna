export const name="mobile_share_stack";
export const id="dl_8cb60fb0004944be9c51";
export const url=new URL("../icons/mobile_share_stack.svg?v=81070d5489d885af450f358b9a37fe6371f593a6d47effe12a0aa9198d64c418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
