export const name="tram-duotone";
export const id="dl_9b938651e523703cf85d";
export const url=new URL("../icons/tram-duotone.svg?v=a52db0d937b3f5580df0da1dec4ecff9e43751d0c269c3116215fc653d7832b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
