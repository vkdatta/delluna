export const name="mobile_arrow_down-fill";
export const id="dl_8e0583022b805e307a0d";
export const url=new URL("../icons/mobile_arrow_down-fill.svg?v=6f311fc73207eeb2719882c3384c07cb4c575666a28f0981f02c4b32e315f7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
