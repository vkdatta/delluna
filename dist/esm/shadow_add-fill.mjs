export const name="shadow_add-fill";
export const id="dl_151a8dde82cb0f31cbbb";
export const url=new URL("../icons/shadow_add-fill.svg?v=1511fa4cff0e5642a5bfa7124f073135fa0ea6fcb6c3831a3ffef62f154d94dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
