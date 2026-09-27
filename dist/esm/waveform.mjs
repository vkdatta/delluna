export const name="waveform";
export const id="dl_d76d39ef33d4dd8fcd0b";
export const url=new URL("../icons/waveform.svg?v=58d90d57e99e2e4feaf4e4ec4eb0a1c30d9e7cd7b43e5768954a66e36b12d95e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
