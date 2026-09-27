export const name="bug_report";
export const id="dl_d0cdba03128b7e93f73f";
export const url=new URL("../icons/bug_report.svg?v=6deec7be4e7b519d9d49c98bd12c89bb666ea0235b2b5d813b642f03add45c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
