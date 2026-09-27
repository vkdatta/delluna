export const name="bounding-box-duotone";
export const id="dl_707931f93d444f0d9cde";
export const url=new URL("../icons/bounding-box-duotone.svg?v=521a1a689dfe1dc1fe664ee3020c54d3a348be8afe531e1018ef1d326eab0436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
