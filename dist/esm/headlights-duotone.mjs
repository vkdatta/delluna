export const name="headlights-duotone";
export const id="dl_937ebb86d34c4bcfbcc8";
export const url=new URL("../icons/headlights-duotone.svg?v=1e4cfc30a47aeb46d8c23fd194368933575877dccc0998319569531085525cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
