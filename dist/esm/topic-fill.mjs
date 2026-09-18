export const name="topic-fill";
export const id="dl_a767826701c946a1806e";
export const url=new URL("../icons/topic-fill.svg?v=ee95078f0f929dc2b2513864006a0834c04c19c82c6dd9d499648d489dcc8980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
