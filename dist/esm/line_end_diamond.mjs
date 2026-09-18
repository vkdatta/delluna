export const name="line_end_diamond";
export const id="dl_f6581cf4cb48467c8262";
export const url=new URL("../icons/L/line_end_diamond.svg?v=047b04f01691ccb684304f3daa2d71e973e5e5ff3b3d39b0f9ce5914d0d58458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
