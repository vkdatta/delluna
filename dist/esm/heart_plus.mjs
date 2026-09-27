export const name="heart_plus";
export const id="dl_a5ebd2f1d4756e6d0bf0";
export const url=new URL("../icons/heart_plus.svg?v=91be928992c571a09122d3789c52ffe2f440767d0882feea7ed00a67296c51d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
