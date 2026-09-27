export const name="add_row_below";
export const id="dl_c8caf8712214f6b018e9";
export const url=new URL("../icons/add_row_below.svg?v=83a0022a412d23610ec125bb5274e8054a4b3fd3e64986ca085689d0c1e4b011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
