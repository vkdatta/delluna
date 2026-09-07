export const name="prescription-fill";
export const id="dl_87359fa667de4eb69e95";
export const url=new URL("../icons/prescription-fill.svg?v=db15fe69da16d305a22d409fd5498be92a13e7232184d3906ecb7402ec5093c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
