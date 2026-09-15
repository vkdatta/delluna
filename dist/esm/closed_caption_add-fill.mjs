export const name="closed_caption_add-fill";
export const id="dl_23684407dad842efa4f7";
export const url=new URL("../icons/C/closed_caption_add-fill.svg?v=ceb9e3622aeda2b95c33374019cbd2321ec4e06c028ac296f1d033e6b9d26a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
