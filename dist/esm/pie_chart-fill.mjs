export const name="pie_chart-fill";
export const id="dl_60d25e08ae97002f1485";
export const url=new URL("../icons/pie_chart-fill.svg?v=34a51fe52f2a73f4420aac176a8715a0c5555c0abce150b4fed0c1a3815151cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
