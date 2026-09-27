export const name="number-square-seven-light";
export const id="dl_d70f281bfffd46809c3f";
export const url=new URL("../icons/number-square-seven-light.svg?v=45594a12aec315db548083ff2519e152d2c6d5d5a47749f4fc7ee22af9ba5cb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
