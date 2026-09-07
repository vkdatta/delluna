export const name="layers_alt";
export const id="dl_f8dfa575c0d3480a8a8a";
export const url=new URL("../icons/all_60_named_svgs/layers_alt.svg?v=d01495a676a81324acc7a60ab3dd8d94b3f54bfaad4a4774b001f6eb81dddecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
