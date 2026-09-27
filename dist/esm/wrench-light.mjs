export const name="wrench-light";
export const id="dl_23475fcfe3a708fadee5";
export const url=new URL("../icons/wrench-light.svg?v=615d37add024e60c55c15fa4abb2b537b806f546b7c1af0f9efdb4f60f149fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
