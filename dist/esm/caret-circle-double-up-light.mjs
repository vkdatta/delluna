export const name="caret-circle-double-up-light";
export const id="dl_85ff42e367614a658377";
export const url=new URL("../icons/caret-circle-double-up-light.svg?v=0a0d4ee73364f55b8c35c249b2bdfe8d28a13a853cec3abd7579da132ae6f413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
