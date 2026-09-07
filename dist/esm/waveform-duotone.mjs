export const name="waveform-duotone";
export const id="dl_472522c2cd674fab815b";
export const url=new URL("../icons/W/waveform-duotone.svg?v=9a75919388f5474d3a2f76694b1d7dd4f9621f63101f410ee2583c7af153bae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
