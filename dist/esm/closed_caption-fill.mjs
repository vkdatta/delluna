export const name="closed_caption-fill";
export const id="dl_f562360590376fcbe013";
export const url=new URL("../icons/closed_caption-fill.svg?v=42cf50cab46f9612d0730e30922bf6d0ead50cc0e9993d230ef8114e37ba2500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
