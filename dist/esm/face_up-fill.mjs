export const name="face_up-fill";
export const id="dl_2f4602e848cd8c68dd0c";
export const url=new URL("../icons/face_up-fill.svg?v=a2feec9a947cb3b4cc33ef63588ae832f92d3cbeb63a734f2cfa9dc04d08dae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
