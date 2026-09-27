export const name="view_compact_alt-fill";
export const id="dl_b4bd4f964b306e24da1b";
export const url=new URL("../icons/view_compact_alt-fill.svg?v=2a612d0a92449600a0a378be019855465f6745911970ee13a869c14353a3a94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
