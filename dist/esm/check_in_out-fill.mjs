export const name="check_in_out-fill";
export const id="dl_376069287fb9bd86f957";
export const url=new URL("../icons/check_in_out-fill.svg?v=422a8fd41446330bbd5679820e00f593481da68bc7fa56719b6ee34cee164ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
