export const name="waterfall_chart-fill";
export const id="dl_f31c46cbcd3a4fde3a08";
export const url=new URL("../icons/waterfall_chart-fill.svg?v=74e0d59d982c2b6bc566452fcef9ebb00d5b7a58bf483d2b4bfff5eb6ed4f23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
