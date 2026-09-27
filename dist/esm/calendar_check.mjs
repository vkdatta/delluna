export const name="calendar_check";
export const id="dl_46b7b85d81fbe20006a3";
export const url=new URL("../icons/calendar_check.svg?v=edae260126169027a15faa95f5a8271cfd18d10568075b4291cb2a7a54cc0ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
