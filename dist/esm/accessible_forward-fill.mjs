export const name="accessible_forward-fill";
export const id="dl_845de00291054adcaec4";
export const url=new URL("../icons/A/accessible_forward-fill.svg?v=24fb1f8a66a6db36bbf831025fbd0fa8995c4157f556bab5aaafad0af669a3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
