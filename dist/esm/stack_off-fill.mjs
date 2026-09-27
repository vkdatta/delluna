export const name="stack_off-fill";
export const id="dl_51a08d36966643679fbd";
export const url=new URL("../icons/stack_off-fill.svg?v=f770bcf51dbe25841774fb0bd7131ec3d4949c0f2cbd708b31ce19c14a9fe802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
