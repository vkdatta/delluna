export const name="lucid_1-calendars";
export const id="dl_b6237eed411a4a299800";
export const url=new URL("../icons/lucid_1-calendars.svg?v=03a66c9f4561dab4f4e342a7f69afed15cab36c10f1c24ba558439e194ea48d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
