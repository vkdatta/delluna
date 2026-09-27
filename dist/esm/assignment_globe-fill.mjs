export const name="assignment_globe-fill";
export const id="dl_4f41d48b7b0df87df04b";
export const url=new URL("../icons/assignment_globe-fill.svg?v=caf4eb9a2fc688992783a85a7cb5343fed8dbfb842f9dca46e519163dd07121f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
