export const name="cognition_2-fill";
export const id="dl_9bdc6bcbf66ae8ec04ed";
export const url=new URL("../icons/cognition_2-fill.svg?v=d1d04d22658d21820393fdc95ac25afe9ba3cf8e95c211d82d60de95471c64d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
