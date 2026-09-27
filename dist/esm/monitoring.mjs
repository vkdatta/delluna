export const name="monitoring";
export const id="dl_a35a6b79aae08f463a11";
export const url=new URL("../icons/monitoring.svg?v=853f0e51096ea7d5bfef03cad892908c36466d6c611f5c23f40d5d2f158a448d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
