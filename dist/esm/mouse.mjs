export const name="mouse";
export const id="dl_81026f85c11c9750c8fd";
export const url=new URL("../icons/mouse.svg?v=d0072b8fb3d528db980119ba8965d450ebda1bd143021e14984e598395269aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
