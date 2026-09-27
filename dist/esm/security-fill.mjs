export const name="security-fill";
export const id="dl_f6c3fcd618404255491f";
export const url=new URL("../icons/security-fill.svg?v=559703cd7bc9bbdf894749cc30f040fb2b036f099d3d0440800d699c858532e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
