export const name="filter_alt";
export const id="dl_db547dbcc75aa3dd0b14";
export const url=new URL("../icons/filter_alt.svg?v=22deda94b648f1aee31e622c88c79e2e4b2b7c4913943b0d75b79e87540637b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
