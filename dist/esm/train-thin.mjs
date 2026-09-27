export const name="train-thin";
export const id="dl_16a0736c814811521433";
export const url=new URL("../icons/train-thin.svg?v=2f8af45391cd933d9325510a2570b56c9feedabc01160b01e8a90da5fd7cecf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
