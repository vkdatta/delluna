export const name="greater-than-or-equal-duotone";
export const id="dl_16136ca0974c431d856f";
export const url=new URL("../icons/greater-than-or-equal-duotone.svg?v=480abf4ebd9f8eef008a28ab290ca0f4faf42fc43339f2d34c1eda1d9923a18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
