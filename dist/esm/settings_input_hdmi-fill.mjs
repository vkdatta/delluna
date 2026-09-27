export const name="settings_input_hdmi-fill";
export const id="dl_dbe73c433bcf815c562e";
export const url=new URL("../icons/settings_input_hdmi-fill.svg?v=3b630b1306b7c471a74ebb8618af6868e3caf27398f1420220e26e567bd8bc41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
