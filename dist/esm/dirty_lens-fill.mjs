export const name="dirty_lens-fill";
export const id="dl_6369dbe85fa946c2b41f";
export const url=new URL("../icons/dirty_lens-fill.svg?v=90d8ec49dc8c414f2142f3bccff06d5c1b202ec34b684891a8c15b0569f3c5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
