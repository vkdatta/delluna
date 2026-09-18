export const name="car_defrost_left-fill";
export const id="dl_99f72eda27a9454cb825";
export const url=new URL("../icons/car_defrost_left-fill.svg?v=fe906acef1fc681a0199e14a733a5254c04a2ec26b84290242a318c40a5c3455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
