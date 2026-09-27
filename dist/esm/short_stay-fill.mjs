export const name="short_stay-fill";
export const id="dl_67e2522b6b7fcf9922ac";
export const url=new URL("../icons/short_stay-fill.svg?v=15ac26c255a97f5f74f6722196e383433b92daa8e9234bd0e74861a00ec38acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
