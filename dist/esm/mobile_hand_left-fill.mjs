export const name="mobile_hand_left-fill";
export const id="dl_adc5788d4e99685675dd";
export const url=new URL("../icons/mobile_hand_left-fill.svg?v=4555ce1c27dd78c0d92a719faceb44327ba285002d9488b22133415d46c27d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
