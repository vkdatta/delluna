export const name="scribble-loop-fill";
export const id="dl_46ff846a9cf1470b950b";
export const url=new URL("../icons/S/scribble-loop-fill.svg?v=d12cad8c59efb187a3506dadb3ec59aab73e517f33eaff01a50c6c74bfc82c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
