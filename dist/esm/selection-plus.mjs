export const name="selection-plus";
export const id="dl_7ef8335fbea449cea354";
export const url=new URL("../icons/S/selection-plus.svg?v=680bc96563cf57695c516267b393a51c150ff7ea51aee4a911435a7a9c5dc8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
