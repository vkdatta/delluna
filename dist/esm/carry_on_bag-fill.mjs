export const name="carry_on_bag-fill";
export const id="dl_a5b5f30451e1394988a0";
export const url=new URL("../icons/carry_on_bag-fill.svg?v=99a5fdffcffeceb3d19435f136e88c330494ee7d854fd56223d8b1062a45bcb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
