export const name="bone";
export const id="dl_a668743d8bf64944b585";
export const url=new URL("../icons/bone.svg?v=01fb7e327379ed9f668f1684916ef056b494e1f77361e9a4fab4c19228d8ed07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
