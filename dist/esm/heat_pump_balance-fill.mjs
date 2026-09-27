export const name="heat_pump_balance-fill";
export const id="dl_8663e6024381887d7235";
export const url=new URL("../icons/heat_pump_balance-fill.svg?v=2d9a1cecffc63f8c31e116fe3dda6d37a8e9790068250929e5b5d4f80f1df188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
