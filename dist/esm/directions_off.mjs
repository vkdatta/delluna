export const name="directions_off";
export const id="dl_ba2533740492452d967e";
export const url=new URL("../icons/directions_off.svg?v=5fbe19884ffe491e46765c761a78fee845393f00f1683a9d94f8d05313612c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
