export const name="cube-focus-light";
export const id="dl_2ce73ddfd62745728e9f";
export const url=new URL("../icons/cube-focus-light.svg?v=c1a6d1ed17442437eaa5f6384e334989849735f534683a9cbf34c6b7019121aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
