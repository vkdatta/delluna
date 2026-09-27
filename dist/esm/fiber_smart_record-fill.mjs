export const name="fiber_smart_record-fill";
export const id="dl_9ab8d79aefb7675e97a8";
export const url=new URL("../icons/fiber_smart_record-fill.svg?v=0ebe752cf88100fec9f48064057a8012c40e2271855655bcd356629a02d2660f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
