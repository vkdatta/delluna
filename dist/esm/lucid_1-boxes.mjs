export const name="lucid_1-boxes";
export const id="dl_d5aaad6734fc40549dae";
export const url=new URL("../icons/lucid_1-boxes.svg?v=d17ae9d8ceb0eeece1ab05dd2d0ddadfb023ee36ba538ebcdffe8e7d3e2e8d09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
