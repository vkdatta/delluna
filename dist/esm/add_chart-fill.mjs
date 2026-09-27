export const name="add_chart-fill";
export const id="dl_a67d9ae14787376f057d";
export const url=new URL("../icons/add_chart-fill.svg?v=3447802783464ffe8f2f5927d82114dad6dd2c08196c6745a349f9c161720ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
