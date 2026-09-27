export const name="single_bed";
export const id="dl_bcb9ad5d3abfd6adc3a8";
export const url=new URL("../icons/single_bed.svg?v=827da67082df24e2180334ebff0ff9ae447f7e76d0a8c72905354420809595f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
