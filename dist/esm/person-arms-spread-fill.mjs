export const name="person-arms-spread-fill";
export const id="dl_a477842228154255b27a";
export const url=new URL("../icons/person-arms-spread-fill.svg?v=d991f66de26871f405097e720dd1195b596b8c73d049f96da85d41b01bd75f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
