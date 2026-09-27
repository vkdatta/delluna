export const name="nest_mini-fill";
export const id="dl_a0cc126a98f83c6c7e48";
export const url=new URL("../icons/nest_mini-fill.svg?v=4b5ceab1004806f5946d73e11316a554746672e1941c3e28a35f3d2bd1156ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
