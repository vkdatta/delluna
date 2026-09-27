export const name="battery_full_alt-fill";
export const id="dl_39c8ee20765a06d951dd";
export const url=new URL("../icons/battery_full_alt-fill.svg?v=18399a26192558f1b412a21158e4656d91a3dac8111bbefebeb69dc418177a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
