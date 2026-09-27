export const name="arrow-elbow-down-left";
export const id="dl_34a779d9c393480192dc";
export const url=new URL("../icons/arrow-elbow-down-left.svg?v=9fdab5ef26a8ff1bf7b509b163c556b25ae2be7465f92bb02c35db9f3d1d6f32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
