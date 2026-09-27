export const name="counter_9-fill";
export const id="dl_c00d77fb290c50a31452";
export const url=new URL("../icons/counter_9-fill.svg?v=afe136af831a06b2f8bc6bd56f2244e74c221970b1b62179e88a0cdbbb3e2b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
