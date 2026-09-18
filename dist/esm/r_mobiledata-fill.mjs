export const name="r_mobiledata-fill";
export const id="dl_0ea2b84840844a4b8882";
export const url=new URL("../icons/r_mobiledata-fill.svg?v=0b8c708b92db0640aa38a0decc4b5172ebd62c658628fdf702f96bbe43978dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
