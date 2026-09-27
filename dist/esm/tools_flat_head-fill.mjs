export const name="tools_flat_head-fill";
export const id="dl_619d16888a63f33895a1";
export const url=new URL("../icons/tools_flat_head-fill.svg?v=1af8cabf1c46f940dc1eaa9a38aefb5819ec40c3c0599d369bb6aba821c8331c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
