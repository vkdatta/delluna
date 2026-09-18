export const name="car_defrost_right-fill";
export const id="dl_73d579134e2a4bddbea2";
export const url=new URL("../icons/car_defrost_right-fill.svg?v=03c503e9bcabb619b174773f095e009f0b6b9cdaafbf3c086b4157963d1cde49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
