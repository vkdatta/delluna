export const name="print_lock";
export const id="dl_15f2a588ccb8cbad98d3";
export const url=new URL("../icons/print_lock.svg?v=d61e60350e28a96f8e8d23631720eb6de71cf818479c9306bd71b23d09c19c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
