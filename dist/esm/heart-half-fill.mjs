export const name="heart-half-fill";
export const id="dl_44b0ec5bdb3e4513a14d";
export const url=new URL("../icons/heart-half-fill.svg?v=4e08069ec5a99e37591aa4f827ddcbd37910371a8efb7e3a6ddce5c56445dc0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
