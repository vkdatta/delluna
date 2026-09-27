export const name="number-circle-two-bold";
export const id="dl_d43e13fc1d3b4c20aa45";
export const url=new URL("../icons/number-circle-two-bold.svg?v=df2be2a29c8d945259069d4f5737a799651aec34c2dcf62db283dabeef45ed19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
