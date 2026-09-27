export const name="lucid_1-calendar-days";
export const id="dl_cc58065c7d2549918471";
export const url=new URL("../icons/lucid_1-calendar-days.svg?v=97d113d7f84defb4d07de021126e0c9418e03835e112f54c38cc96a3e70543a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
