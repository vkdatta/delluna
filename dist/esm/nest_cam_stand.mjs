export const name="nest_cam_stand";
export const id="dl_b160bcf8ebe941c89a87";
export const url=new URL("../icons/nest_cam_stand.svg?v=eb8404af37d7edd28a8bc6ff7c8e861f5e22697865ae8d21380df0b6ffa1714a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
