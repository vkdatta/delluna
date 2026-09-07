export const name="collapse_up_alt";
export const id="dl_ccf62aa1805743429f0d";
export const url=new URL("../icons/all_60_named_svgs/collapse_up_alt.svg?v=2027cf97a2aebbf1a882892d2919bf2aeeac88865cdbaac377e11276dceacf2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
