export const name="beer-bottle-fill";
export const id="dl_e9f45b8af8ee461fa6b1";
export const url=new URL("../icons/beer-bottle-fill.svg?v=7e41c7dd6ffe5408a2b27338f75152c9419ad67ae05e0686c73bdce3f842dc35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
