export const name="grid-nine-fill";
export const id="dl_e8d56d9611b94fd6b51d";
export const url=new URL("../icons/grid-nine-fill.svg?v=4a18cd0fcd4ebd6d1385ac41c8b81c35dc80681336d91c9ebb1871c17b6646dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
