export const name="medication-fill";
export const id="dl_363633e133c44765a0bb";
export const url=new URL("../icons/M/medication-fill.svg?v=18f1b3ab2719e6a8f9793e16a760d58d2a608fd5fbc6ddb5050ecfcc0fb5da56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
