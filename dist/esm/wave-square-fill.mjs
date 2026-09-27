export const name="wave-square-fill";
export const id="dl_b19189ab8c6947727ff4";
export const url=new URL("../icons/wave-square-fill.svg?v=1a92a0841098766e140037db8b58d72f4f1debdfd95eefd680c81d853388327c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
