export const name="3k_plus-fill";
export const id="dl_42503d0092d874c013c3";
export const url=new URL("../icons/3k_plus-fill.svg?v=870f9f4c321d6379c78a26f5f5f139e3b0af4f9a1669c8d3f5c3aa6f4910e6f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
