export const name="bedroom_parent-fill";
export const id="dl_28637556b289a4ad20bb";
export const url=new URL("../icons/bedroom_parent-fill.svg?v=4fb1a8ddf8c3e799333fa5aa2699bb9fe08373a98886834079dbceb7870bb928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
