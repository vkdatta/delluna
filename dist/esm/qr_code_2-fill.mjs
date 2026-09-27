export const name="qr_code_2-fill";
export const id="dl_4f22de5af863c136fa9f";
export const url=new URL("../icons/qr_code_2-fill.svg?v=0699135957a59041df3acda2fbfcbca576606cd97de05c4ef8bf12b3d2ddc786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
