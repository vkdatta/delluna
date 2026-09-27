export const name="gps-fix-light";
export const id="dl_d35d9b86ba6d4242b85d";
export const url=new URL("../icons/gps-fix-light.svg?v=c40e3a42afffcedf86c79277581352c2f1ce441aabbb40da1b7014c49f0213fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
