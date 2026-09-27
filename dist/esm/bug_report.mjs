export const name="bug_report";
export const id="dl_d0cdba03128b7e93f73f";
export const url=new URL("../icons/bug_report.svg?v=98fa1e678becf2be2cb59c0191e462961de52cd29663ac2c0f3d7030aaf76c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
