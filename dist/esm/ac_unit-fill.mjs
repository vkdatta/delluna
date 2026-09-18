export const name="ac_unit-fill";
export const id="dl_7510c4f68d984b58a395";
export const url=new URL("../icons/ac_unit-fill.svg?v=dc5cd5f5ceb1604308e567b27732f06078b6bb10dfb389cce2eee480fdf0ab2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
