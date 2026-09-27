export const name="format_quote_off";
export const id="dl_d9cba02e8bac1b9d8a1a";
export const url=new URL("../icons/format_quote_off.svg?v=f09ad3b8a05b9cf70f2201ee96b3ee5139d27b5cd8355e14faad02a1b7ccfba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
