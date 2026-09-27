export const name="presentation-duotone";
export const id="dl_115adb9b4ff740498e7b";
export const url=new URL("../icons/presentation-duotone.svg?v=43c7c35069f88209fbbb93410ccededa9e2db2c73becac916df183649452e578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
