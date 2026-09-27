export const name="dirty_lens-fill";
export const id="dl_e3dc87370c5553385d36";
export const url=new URL("../icons/dirty_lens-fill.svg?v=58da76a80eaa8aa13317a3c36ac2cc40ffa0b497ab1b0450a0e61507130ac9be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
