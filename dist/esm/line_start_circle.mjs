export const name="line_start_circle";
export const id="dl_3abbce71e87541999167";
export const url=new URL("../icons/line_start_circle.svg?v=2158e348db94fb388e446312b4719b1ffe9b575e141b624dd2924269a2e8139d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
