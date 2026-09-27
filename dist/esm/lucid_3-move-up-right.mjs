export const name="lucid_3-move-up-right";
export const id="dl_4bc9bbb9faa64b39b61a";
export const url=new URL("../icons/lucid_3-move-up-right.svg?v=8de0f989d4cabcfaef14aca203022e58d089f6f2fd58869d58136441d87ec8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
