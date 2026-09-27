export const name="foot_bones";
export const id="dl_3e7b9a9bd44d5e340ccb";
export const url=new URL("../icons/foot_bones.svg?v=7c250429529cd5061813f2d93348b6bdef5b8a93e7823a0e96a954119a214fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
