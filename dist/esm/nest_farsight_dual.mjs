export const name="nest_farsight_dual";
export const id="dl_a9190eee4155593493bf";
export const url=new URL("../icons/nest_farsight_dual.svg?v=b41215b1575599f7651d35ec465caf73f89465c85a09b4c3c20b3dca350214f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
