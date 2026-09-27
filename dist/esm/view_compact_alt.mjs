export const name="view_compact_alt";
export const id="dl_cc95c8bc131e817637b6";
export const url=new URL("../icons/view_compact_alt.svg?v=0d02a1ca6b78d4729db783a5dad4e0411fd16d62b79d019f8ee9833b8908c813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
