export const name="arrow-elbow-right-down-duotone";
export const id="dl_98b0e45ccd0c4495883d";
export const url=new URL("../icons/arrow-elbow-right-down-duotone.svg?v=a8473e237356ba60a3367d754978841fef4bd4424fc62b01fa5187cacdd31831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
