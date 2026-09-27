export const name="pint-glass-fill";
export const id="dl_c559ad292b1c4cc49b4c";
export const url=new URL("../icons/pint-glass-fill.svg?v=50ab20b9f2ce6349923da3785676dfa73ad50fe44ae8718db37b76dc965dda67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
