export const name="north_east-fill";
export const id="dl_1a31ea9cd2a44d078f19";
export const url=new URL("../icons/N/north_east-fill.svg?v=82d2fe8f2982c16f14da085eaf8cb6cff3e0bd73bd7676d42a9d46bd9190cf7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
