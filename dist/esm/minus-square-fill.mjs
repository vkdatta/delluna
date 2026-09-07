export const name="minus-square-fill";
export const id="dl_f739a3bcaa8c4d768530";
export const url=new URL("../icons/minus-square-fill.svg?v=94d10b41da61438271ef6b90a5a80ff4199e0dc550954f71f0acc9b9a8ef214d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
