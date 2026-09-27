export const name="add_ad-fill";
export const id="dl_deaae15989c3c16bdc94";
export const url=new URL("../icons/add_ad-fill.svg?v=7c5461b79c96835f468385306c89ef0d68a34897e2bad40056cdcc494d4c885b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
