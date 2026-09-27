export const name="lucid_1-calendar-days";
export const id="dl_cc58065c7d2549918471";
export const url=new URL("../icons/lucid_1-calendar-days.svg?v=409eb509d359ee6468428a41c10f81d2f04c8c64a502d3e4c8a2f75415635d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
