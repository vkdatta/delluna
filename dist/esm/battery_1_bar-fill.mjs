export const name="battery_1_bar-fill";
export const id="dl_333cf591bd1d6d1498b4";
export const url=new URL("../icons/battery_1_bar-fill.svg?v=19c04ba07bb4aaa9277820f922794e5d133fc5ddd3ce4930287952c0e62e47e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
