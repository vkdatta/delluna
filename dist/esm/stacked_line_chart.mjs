export const name="stacked_line_chart";
export const id="dl_226009a16f51cb9cdc23";
export const url=new URL("../icons/stacked_line_chart.svg?v=0f84a493f9254ac81cd611656779526b69d831bb33cdfcf0ee5dc8f70daf30d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
