export const name="assignment_late-fill";
export const id="dl_d0da6de0d0e72d9ebd12";
export const url=new URL("../icons/assignment_late-fill.svg?v=d9549174fa646d00ba4d21560a1860f0afb002d6f60a214116ec374e2e99ea84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
