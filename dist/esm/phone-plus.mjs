export const name="phone-plus";
export const id="dl_4e62e4f3fc954b13ac8f";
export const url=new URL("../icons/phone-plus.svg?v=2926b7d10bd62aabb9404c260543f21bce17fb465e5a05fca5e6ecd606724cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
