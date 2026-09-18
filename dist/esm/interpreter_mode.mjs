export const name="interpreter_mode";
export const id="dl_4b39073ce4ce43758501";
export const url=new URL("../icons/interpreter_mode.svg?v=871820dcc99e5e92333b4c746ee35a4208c1850173ccd999bfd588baa0ce70bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
