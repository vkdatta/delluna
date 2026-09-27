export const name="drop-half-thin";
export const id="dl_6cb196f5d38e4252ba9b";
export const url=new URL("../icons/drop-half-thin.svg?v=16f8b1513135e8752c9d9e1b1bd9aa635ebd12edb276530893961856d36ef130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
