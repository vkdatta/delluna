export const name="broom-light";
export const id="dl_88b8a3a6d5964505b7d8";
export const url=new URL("../icons/broom-light.svg?v=4c81b149cb581cf7648b7dc6de3305269168346556dfd12035c09de61f052759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
