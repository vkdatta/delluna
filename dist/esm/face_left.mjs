export const name="face_left";
export const id="dl_098415d276844ea0ab3c";
export const url=new URL("../icons/F/face_left.svg?v=0cadb37d9599d4a4508eeeb8d3c1f1267447d168a7bca95ef34b48048ef84f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
