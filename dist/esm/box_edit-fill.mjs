export const name="box_edit-fill";
export const id="dl_c76578cbc15d4eb7be00";
export const url=new URL("../icons/box_edit-fill.svg?v=64819230972a209b2b4b3092a01e3315d12619e8f16e361e468803967006df08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
