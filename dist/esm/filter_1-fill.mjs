export const name="filter_1-fill";
export const id="dl_a7d6cf5e8a0de5549163";
export const url=new URL("../icons/filter_1-fill.svg?v=b38f3b0fb8a7dc3dd81e450f820b18c0e6b9d2ee4377f23764537b20cead0fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
