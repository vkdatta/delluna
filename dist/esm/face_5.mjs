export const name="face_5";
export const id="dl_4571e0ea64036d8e1b6d";
export const url=new URL("../icons/face_5.svg?v=5fedfb41d6ea0cde168e95106250d7e11751c7437fc18979f14fb0bb2a5145fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
