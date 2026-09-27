export const name="event_available-fill";
export const id="dl_bc19e6f26696547ef3c3";
export const url=new URL("../icons/event_available-fill.svg?v=5bf351b1e4a6c14436b149fa995559e80a0e912e4b35a7493964c58cb29043bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
