export const name="format_paint_off";
export const id="dl_7f1ddb302e19a7cbf279";
export const url=new URL("../icons/format_paint_off.svg?v=b30bda426be8cd39d9e19e918096ba8aaad34a0b10c5cd9b82dc0886adc179d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
