export const name="humerus";
export const id="dl_1575bfcc972e5214b08a";
export const url=new URL("../icons/humerus.svg?v=52c9cada251e0161f21135a32a769a2b2aee908c94de17a9da03a3f2667e5652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
