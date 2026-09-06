export const name="arrow-bend-double-up-right-fill";
export const id="dl_a95643e40cdb40a1b187";
export const url=new URL("../icons/arrow-bend-double-up-right-fill.svg?v=88d05b23de218f7bd826d985d926e1cde41425ec2acbcb8eba85493353056d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
