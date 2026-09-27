export const name="face_2";
export const id="dl_79ea94fc7aa03d51dbb7";
export const url=new URL("../icons/face_2.svg?v=c04c4ee4fab94be20cf621e5e30269bc9c93212323ff9c46c0b8bcaeed6fe2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
