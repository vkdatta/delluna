export const name="arrow-elbow-right-down-fill";
export const id="dl_4137a75894c04b3980a1";
export const url=new URL("../icons/arrow-elbow-right-down-fill.svg?v=3e31d8210fcf023c6e796510c68b81c9ba2739ec540f9244e02af888a015559d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
