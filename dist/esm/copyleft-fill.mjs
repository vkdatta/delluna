export const name="copyleft-fill";
export const id="dl_31c39e06972445b782fd";
export const url=new URL("../icons/copyleft-fill.svg?v=9090e8e757ac790bf6e5f71709a78b7aa963ec4564941ba4a1b6135178b320c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
