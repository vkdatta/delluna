export const name="inbox_customize-fill";
export const id="dl_e529f99973fd4798a771";
export const url=new URL("../icons/inbox_customize-fill.svg?v=3a46a29378ba86ff81b0df275d6442e4eec8a690c279ed6e747c4c99c84866dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
