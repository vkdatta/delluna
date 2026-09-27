export const name="last_page-fill";
export const id="dl_f5cb6ee55742ae54e423";
export const url=new URL("../icons/last_page-fill.svg?v=fe377dc74bc2ca70a7f3945377d7f655fc1abe6943754c9aabca8540c2815494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
