export const name="finance_chip";
export const id="dl_f830d28e3f0d19e4ca28";
export const url=new URL("../icons/finance_chip.svg?v=ddbbc80ff0bfb9e8564a17cbd4e632706da4f5d05d3e590a6372f9dc20992288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
