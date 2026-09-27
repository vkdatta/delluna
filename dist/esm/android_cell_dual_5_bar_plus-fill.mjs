export const name="android_cell_dual_5_bar_plus-fill";
export const id="dl_8ed7078ec1bce38e9c2e";
export const url=new URL("../icons/android_cell_dual_5_bar_plus-fill.svg?v=adc7ec29b9604e756adc6006e498497d0787bf9737143186a2c5225121fd75dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
