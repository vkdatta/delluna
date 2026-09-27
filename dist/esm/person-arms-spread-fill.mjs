export const name="person-arms-spread-fill";
export const id="dl_a477842228154255b27a";
export const url=new URL("../icons/person-arms-spread-fill.svg?v=885cbbaa675d7ba3d8bfbc012408f3ff2d19793c396a16de7a1d522adac93879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
