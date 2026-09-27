export const name="input_circle-fill";
export const id="dl_7fba4021dd626c761b9c";
export const url=new URL("../icons/input_circle-fill.svg?v=5f61bbb48aa5cfe532e8cc3c183ecaf429058ccf1f3178b382923b92cea4cb7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
