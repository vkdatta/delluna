export const name="send_and_archive-fill";
export const id="dl_1f5f0be85c104cf7a894";
export const url=new URL("../icons/S/send_and_archive-fill.svg?v=2b0d307db956a0e0701f094bff88a31040941388dde0055865d6a14c7e7eb5bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
