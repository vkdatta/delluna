export const name="caret-up-down-duotone";
export const id="dl_65293ff33c014d8687ac";
export const url=new URL("../icons/caret-up-down-duotone.svg?v=b1f296f3fc3d3ed0f038b8bec9a18162346823536c57d7e955ed128d079501b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
