export const name="thick-rim-circle";
export const id="dl_83c0f634d02d4dc68a77";
export const url=new URL("../icons/close/thick-rim-circle.svg?v=69f9911f94998ff998001f2c0454372a4cee6ea91357397c8c34b63e6a2f3e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
