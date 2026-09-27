export const name="person_pin-fill";
export const id="dl_caed0d4b7d8b5ab49776";
export const url=new URL("../icons/person_pin-fill.svg?v=cdcee84c43c707bbf08ec38260165fe885c9d5fdbca1fc05c6ba8b8f1e6c6f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
