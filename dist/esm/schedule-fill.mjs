export const name="schedule-fill";
export const id="dl_f136b9b05940fc60061e";
export const url=new URL("../icons/schedule-fill.svg?v=b061190aad696c51fe327414150381aade2ec6ee7096800832b3884df3af1481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
