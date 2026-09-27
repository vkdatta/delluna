export const name="format_list_numbered-fill";
export const id="dl_af1313e91ca013ccb180";
export const url=new URL("../icons/format_list_numbered-fill.svg?v=e9668e6a3aa2da97b94ab73b65fd0f546754c2c1f16ef42bae13ae24a190fd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
