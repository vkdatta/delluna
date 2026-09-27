export const name="face_5-fill";
export const id="dl_1843d584400c3b45ae92";
export const url=new URL("../icons/face_5-fill.svg?v=ca6c1ee25737177e9b39b41e662eec667ff55215a195e99b3bb6aa0ab21dfbe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
