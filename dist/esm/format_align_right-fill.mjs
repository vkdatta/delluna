export const name="format_align_right-fill";
export const id="dl_d57a424bb0f2320d0539";
export const url=new URL("../icons/format_align_right-fill.svg?v=f9fa1c636b0d6a40e816b99a5c419a6662439b82d82ff4671715827e42fe05b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
