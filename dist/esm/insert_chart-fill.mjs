export const name="insert_chart-fill";
export const id="dl_b32ada28a571466ca7a9";
export const url=new URL("../icons/insert_chart-fill.svg?v=bcc3060439d261d5f3a1d3753543102a59f773adeda158431cb04dd383aee430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
