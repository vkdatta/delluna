export const name="target-bold";
export const id="dl_10defc3ea41a02bd4e95";
export const url=new URL("../icons/target-bold.svg?v=74466a6a415252916feb51c24bc91066cfdf3e7f7383a1d40c2c85d82eaffcf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
