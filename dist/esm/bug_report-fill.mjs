export const name="bug_report-fill";
export const id="dl_3377d9ccb8484132baf2";
export const url=new URL("../icons/bug_report-fill.svg?v=06f3af4d0f3ead58053d42c738a854dd05687683205eba3965ced4a11bd70fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
