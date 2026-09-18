export const name="tv_displays";
export const id="dl_0212ecda2ded436a8909";
export const url=new URL("../icons/tv_displays.svg?v=2714152a843a84f54d34200efbba57982c54d5ada90f6aae54b2dc860c0c96cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
