export const name="triangle-right";
export const id="dl_63793fbbcb3546d4bcaa";
export const url=new URL("../icons/triangle-right.svg?v=6dd90d2b19b8eb611fd948d08fe2247016452b47ec06d4d77ca28ed66b1f4322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
