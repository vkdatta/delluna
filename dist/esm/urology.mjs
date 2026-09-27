export const name="urology";
export const id="dl_8534a6d1e690f0f8a0e5";
export const url=new URL("../icons/urology.svg?v=8290add0dd3d2b37b47e59e4c75952eae3f81d55242787605d4af332f29fe697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
