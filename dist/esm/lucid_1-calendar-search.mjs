export const name="lucid_1-calendar-search";
export const id="dl_4b003cb0bbf04306bb41";
export const url=new URL("../icons/lucid_1-calendar-search.svg?v=9231ec84e95c334839d621835e8695e8f85103c1b2c06128586049b6fcce0091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
