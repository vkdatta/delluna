export const name="keyboard_double_arrow_up-fill";
export const id="dl_c98ccbc5be5fe547ccd9";
export const url=new URL("../icons/keyboard_double_arrow_up-fill.svg?v=4dd354e3c284912b58941a52bb4c82a7b43c2c91cbc818df10d7886f4da13dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
