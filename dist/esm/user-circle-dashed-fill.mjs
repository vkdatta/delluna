export const name="user-circle-dashed-fill";
export const id="dl_acc941117f8f56994269";
export const url=new URL("../icons/user-circle-dashed-fill.svg?v=fc6a0c2bb492159c5b658754bfacbc71d4469dcd5af9c237e959416fe6e116ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
