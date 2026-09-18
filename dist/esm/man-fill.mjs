export const name="man-fill";
export const id="dl_a8d5e19260a64b1193b1";
export const url=new URL("../icons/M/man-fill.svg?v=72946edeff24048c56f191f89ae747ef51de9585aafe55df5657c64cc6c8d117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
