export const name="security_key";
export const id="dl_aee607363e63dc7054fc";
export const url=new URL("../icons/security_key.svg?v=299871b3f092c7fa7c193434c058d995677edc2d6c1b996c9e22287fa2abe3b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
