export const name="import_contacts-fill";
export const id="dl_a5b51f964f422260cbf4";
export const url=new URL("../icons/import_contacts-fill.svg?v=f6210ec9194b9529485539533064d3e09d1063a430eaa03de7ffa5e827821826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
