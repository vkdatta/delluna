export const name="face_3-fill";
export const id="dl_dbd4edd7ed0b64baec07";
export const url=new URL("../icons/face_3-fill.svg?v=c1fa21936249a01ea311890d5e217b971609973a117ab88f1f77020267558f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
