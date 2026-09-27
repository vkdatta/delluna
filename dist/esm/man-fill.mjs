export const name="man-fill";
export const id="dl_ee4fac034eb83ace1619";
export const url=new URL("../icons/man-fill.svg?v=72946edeff24048c56f191f89ae747ef51de9585aafe55df5657c64cc6c8d117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
