export const name="security-camera";
export const id="dl_3d0f6719892a46689aaa";
export const url=new URL("../icons/security-camera.svg?v=b0393dea9749260f3c99d163b51bdee61ac8b36c62021ce247656ff01c5f9c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
