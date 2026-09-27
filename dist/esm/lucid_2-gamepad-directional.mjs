export const name="lucid_2-gamepad-directional";
export const id="dl_e2893e493afb44918a69";
export const url=new URL("../icons/lucid_2-gamepad-directional.svg?v=1d37b1d13e4b9796977515ba454b10a208a8e8672338b14fa608caff913dcc40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
