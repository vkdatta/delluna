export const name="lucid_1-calendar-search";
export const id="dl_4b003cb0bbf04306bb41";
export const url=new URL("../icons/lucid_1-calendar-search.svg?v=856e01cf195db61310af4740c11968da6d35f46da5cac8f124a5705a54f36b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
