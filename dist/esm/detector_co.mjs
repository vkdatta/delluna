export const name="detector_co";
export const id="dl_7485ce8d4dff4edc842b";
export const url=new URL("../icons/D/detector_co.svg?v=77750b53e4f8ef03c9745bdc4c2edfd6d482af9ca1f1c126cfc365f189863b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
