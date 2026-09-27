export const name="zoom_out-fill";
export const id="dl_90c02398934c9aa4e332";
export const url=new URL("../icons/zoom_out-fill.svg?v=e57d0348cedc278ad7bd20dd19cd745454b89df13cd49026d30c3939b7086dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
