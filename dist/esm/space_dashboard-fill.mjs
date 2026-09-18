export const name="space_dashboard-fill";
export const id="dl_6b895e2b3642477a9ba9";
export const url=new URL("../icons/S/space_dashboard-fill.svg?v=7cccf6d53e7c80292c252aeb276aa3ca18e567205516ac3bd4bd081709d8ea95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
