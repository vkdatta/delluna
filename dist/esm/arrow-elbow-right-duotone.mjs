export const name="arrow-elbow-right-duotone";
export const id="dl_ec5ee90e76a946129fe4";
export const url=new URL("../icons/arrow-elbow-right-duotone.svg?v=a770007630a47b8bdf2aa2dcff0398d752c6372974f104a95f0e952a1045f15d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
