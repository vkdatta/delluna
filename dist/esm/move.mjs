export const name="move";
export const id="dl_a5eae5c30028142a7c28";
export const url=new URL("../icons/move.svg?v=0cb2be17df4efd8799d82adbdc7157a23caeada7208e80813449926be598d324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
