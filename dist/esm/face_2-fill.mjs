export const name="face_2-fill";
export const id="dl_439d7bd54ce738d2b41f";
export const url=new URL("../icons/face_2-fill.svg?v=28671d0c8efb85c1ab289fa8d6f0c0435ab332abfaa26b22cfe69a28d1f72d8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
