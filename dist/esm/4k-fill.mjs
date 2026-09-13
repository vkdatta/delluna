export const name="4k-fill";
export const id="dl_75688e0957cc46b09e55";
export const url=new URL("../icons/4/4k-fill.svg?v=b214ac652fc05ab32bcf15cba3f2a01e486e7b33c2511d394819b43981111af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
