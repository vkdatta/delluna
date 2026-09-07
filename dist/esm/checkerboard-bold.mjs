export const name="checkerboard-bold";
export const id="dl_a21634a2e84b4938bbd1";
export const url=new URL("../icons/checkerboard-bold.svg?v=9279ba342dc5dc7a799d2d66bbddb1e8cc966753e6a9f90649e42881f22aecd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
