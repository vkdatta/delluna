export const name="mobile_screensaver-fill";
export const id="dl_5b64a6ef77f88b68e3ef";
export const url=new URL("../icons/mobile_screensaver-fill.svg?v=0040f6e10107b9149cfcc3380e5fc84c40595bf3e8884e769e7c4670c1a317a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
