export const name="macro_off-fill";
export const id="dl_a13fbfb081524dfaacfe";
export const url=new URL("../icons/macro_off-fill.svg?v=9f15d975247ae5b4104174a3694dc507ec73452518a8ed9b2ee77e94adc4606a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
