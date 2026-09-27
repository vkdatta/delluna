export const name="car_defrost_mid_right-fill";
export const id="dl_350f158157ffc347b018";
export const url=new URL("../icons/car_defrost_mid_right-fill.svg?v=a6c30e761f0b9188f3a637f5081f955e153321ace5178ba71ec26ed9111c05c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
