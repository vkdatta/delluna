export const name="bar_chart_off-fill";
export const id="dl_563848b1c08afbca4d29";
export const url=new URL("../icons/bar_chart_off-fill.svg?v=924a46a9e4dba7611aef0d3f774dbb0db0ad93097141a44a9ac73aa53afc737c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
