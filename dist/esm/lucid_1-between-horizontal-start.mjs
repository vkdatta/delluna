export const name="lucid_1-between-horizontal-start";
export const id="dl_b9721fa3725e45cb96ca";
export const url=new URL("../icons/lucid_1-between-horizontal-start.svg?v=ead64a2793f78f03bffc272e4f1b850ba4afb4745814a3f2361abe5845524404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
