export const name="nest_cam_wired_stand-fill";
export const id="dl_4ffb9f619fe9fb21900e";
export const url=new URL("../icons/nest_cam_wired_stand-fill.svg?v=86d0b89599aa1e0b04bd7e09d4acd76546c165ebbac83a096a432cb640d3c813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
