export const name="60fps-fill";
export const id="dl_9a6121b3d3944fa4a2f0";
export const url=new URL("../icons/60fps-fill.svg?v=0d43c0c2be725168086c30d15da4032457bd7f4c9b1217b939af9721d1adbe79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
