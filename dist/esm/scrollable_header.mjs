export const name="scrollable_header";
export const id="dl_f7494f07bdcdbb2dd3cc";
export const url=new URL("../icons/scrollable_header.svg?v=9c0b35879a321e5368a6f61f2924e02b5c768544fcd804f82838912f78bfd1e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
