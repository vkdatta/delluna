export const name="table-fill";
export const id="dl_1a4d94378049fbbf1e54";
export const url=new URL("../icons/table-fill.svg?v=7a378895b8243f237d5c16f5c3f81f1767190c4966974240e880429d64965fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
