export const name="intersect";
export const id="dl_c07a1f8cf7d4447aa2b7";
export const url=new URL("../icons/intersect.svg?v=264b024a8bf7811415a49386b2d33516421f6383f4a63011eb948233ef1b0391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
