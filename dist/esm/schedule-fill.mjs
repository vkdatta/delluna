export const name="schedule-fill";
export const id="dl_c07d3b2be6a05fa395ce";
export const url=new URL("../icons/schedule-fill.svg?v=1d5724b1d4cc9fbb803f286ad7ba621166594af086040b3e1c20a7137d95412b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
