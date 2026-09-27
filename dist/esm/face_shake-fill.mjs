export const name="face_shake-fill";
export const id="dl_e45bd5d93b02e5169aed";
export const url=new URL("../icons/face_shake-fill.svg?v=2146272a8eb23cea7c3ec2750b786d154a42244a6cf2026364e125713e097988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
