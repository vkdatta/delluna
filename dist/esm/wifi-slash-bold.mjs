export const name="wifi-slash-bold";
export const id="dl_f512ceba6eb3026e7082";
export const url=new URL("../icons/wifi-slash-bold.svg?v=201e8a1d1e4adc2b5c77098b1c8203c6cab645866f8a88a191a3c28a3a1a67c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
