export const name="calendar_add_on-fill";
export const id="dl_93efcfd88801a21d3b9d";
export const url=new URL("../icons/calendar_add_on-fill.svg?v=ea397d40883074a4702ce530541066d6268c9842bd830f2a067fc1e0a4d9e672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
