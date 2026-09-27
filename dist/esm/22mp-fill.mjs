export const name="22mp-fill";
export const id="dl_ebbf319212aa0e195d1a";
export const url=new URL("../icons/22mp-fill.svg?v=6c2a83103aef40ce4ac2a178bba440b3eebb0792772db2af35d23de2d1ea4316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
