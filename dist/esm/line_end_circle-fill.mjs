export const name="line_end_circle-fill";
export const id="dl_1d82fffe7b29772d5f33";
export const url=new URL("../icons/line_end_circle-fill.svg?v=7e8998e1ba3fa6e24f9f029e9ad84c5939bf6a2a244e360d113db1bc6a4f14c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
