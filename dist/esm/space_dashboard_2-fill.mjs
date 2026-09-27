export const name="space_dashboard_2-fill";
export const id="dl_767530575ee57fb2a634";
export const url=new URL("../icons/space_dashboard_2-fill.svg?v=063a84afec52c9fd83d03bc65ce4cfab0c51810e299ccfcd00856f98e6801b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
