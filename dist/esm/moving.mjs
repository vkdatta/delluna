export const name="moving";
export const id="dl_fc78bbb229b0aa1c0137";
export const url=new URL("../icons/moving.svg?v=e3804505b7737d5f15cb2ca14f7fa3ba7c868bdb0fb38b4630de8c7476aefe5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
