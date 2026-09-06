export const name="cube-duotone";
export const id="dl_4a28d6e66741431cb33a";
export const url=new URL("../icons/cube-duotone.svg?v=5a4833e706e0d7431e607b930ce22af06fcb8ee29ff05da50cb12701a8e64e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
