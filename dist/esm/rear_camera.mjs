export const name="rear_camera";
export const id="dl_1159f093f3910ebacf87";
export const url=new URL("../icons/rear_camera.svg?v=89db73f21de766ba2a7553c6bd4af0e30562442c30926309e68fd2247f3aabba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
