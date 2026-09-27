export const name="assured_workload";
export const id="dl_9c618f8f0624e615856d";
export const url=new URL("../icons/assured_workload.svg?v=9b6f2429497e6daa16434bc34a698bde7cb9cc6266049e199f2b0a0ef2a2835d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
