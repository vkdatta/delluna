export const name="format_letter_spacing_wide";
export const id="dl_88ac7947bad0f2ae6179";
export const url=new URL("../icons/format_letter_spacing_wide.svg?v=c398caaeb581619d3a5509b00fbc3669865f7d90b5da0bf144ddfe3debf2e850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
