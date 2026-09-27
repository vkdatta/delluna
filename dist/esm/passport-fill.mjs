export const name="passport-fill";
export const id="dl_7841dded88910cb96caa";
export const url=new URL("../icons/passport-fill.svg?v=8a912b45219c7de1400b3706a3cc7bc80e106ed47485a9d37e64b34291aeb894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
