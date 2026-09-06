export const name="zoom-in";
export const id="dl_614dc6b10a5549b6b705";
export const url=new URL("../icons/zoom-in.svg?v=322bfc5f1d2f64c1975d4e26056f962b25b8a3dc8b548ff8e1bfe7b69dd3c2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
