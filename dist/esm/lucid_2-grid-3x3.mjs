export const name="lucid_2-grid-3x3";
export const id="dl_602e1a5272a44fa4bddf";
export const url=new URL("../icons/lucid_2-grid-3x3.svg?v=55e707e79b34c5c3fac685be7aabf3e31ca01fb04f979b7936072af09763542c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
