export const name="toggle_off-fill";
export const id="dl_07d99529d18a49c58b8c";
export const url=new URL("../icons/T/toggle_off-fill.svg?v=7cda7b2d5e376602e4486395346fa399988e5e699cf90537e3449c8161452490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
