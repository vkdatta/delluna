export const name="truck-trailer";
export const id="dl_9373252d591f4adc8412";
export const url=new URL("../icons/T/truck-trailer.svg?v=3c7789c3a05796a57d251df0528cf6a7081b5eaebe1c2cc39d69b76d944409e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
