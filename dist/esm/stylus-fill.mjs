export const name="stylus-fill";
export const id="dl_1ea648aeca114c43aff5";
export const url=new URL("../icons/S/stylus-fill.svg?v=85fd8996315706b8cb8a0c3f7a15bc6113b0ffa193430b79e5b9a245f21875e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
