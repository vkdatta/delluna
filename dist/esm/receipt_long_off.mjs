export const name="receipt_long_off";
export const id="dl_a2b221ec94be863d54c8";
export const url=new URL("../icons/receipt_long_off.svg?v=030528d26c2d3a00acc1896ef7170f7257c565c94902eda33129ddfdf31a7665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
