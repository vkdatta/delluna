export const name="humerus_alt";
export const id="dl_42e98f87809c9611168e";
export const url=new URL("../icons/humerus_alt.svg?v=59d8ae4022602b171e14da26c47b09c53c59565d5b797ce21409f77fa080ef28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
