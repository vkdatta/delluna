export const name="border_bottom-fill";
export const id="dl_3a31f26e5e68b5ca3e31";
export const url=new URL("../icons/border_bottom-fill.svg?v=21605ef2d09913771f202472a4f0192fc82842b6a20cd88dbd501af22d208bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
