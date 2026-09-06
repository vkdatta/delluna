export const name="pulse-thin";
export const id="dl_3b323cd694de43bf8efe";
export const url=new URL("../icons/pulse-thin.svg?v=fc849024b1f7c6b1546a421b68c8e73588d3a11ab549ad9ea4cb3a62e5342800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
