export const name="caret-up-duotone";
export const id="dl_9201fef2185d411887a0";
export const url=new URL("../icons/caret-up-duotone.svg?v=db9214afa2b2a5df5a65a109c95e0f99832274c731e84f7cdd0e1dcfbd14a37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
