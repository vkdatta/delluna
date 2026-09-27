export const name="hallway-fill";
export const id="dl_482dfc5f3db4526ad489";
export const url=new URL("../icons/hallway-fill.svg?v=f07d3fcda77f9826b5fa56b64b9b0831e3d97730d48ea290c18c32532dd01a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
