export const name="circle-fill";
export const id="dl_e4a0b280f9e94f119c6a";
export const url=new URL("../icons/circle-fill.svg?v=d0658d99a149a8710fd383d9bd35f873106ba43e1c0ec7d51fa95c8070bc5061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
