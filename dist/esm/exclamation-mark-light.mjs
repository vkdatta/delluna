export const name="exclamation-mark-light";
export const id="dl_b39b746fcbe646bba161";
export const url=new URL("../icons/exclamation-mark-light.svg?v=a256938d50cbdcfa23b06dc158d1d6c9f517d0865120e1f1110e1e61d3674d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
