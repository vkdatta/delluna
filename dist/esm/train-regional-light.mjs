export const name="train-regional-light";
export const id="dl_9683c85d2157493383c0";
export const url=new URL("../icons/T/train-regional-light.svg?v=1d48a303d688998c557b3c6fdaba9ae83ab57a3ef771372c48adcfca89af6f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
