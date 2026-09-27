export const name="e_mobiledata_badge";
export const id="dl_2b3cef4277cb6691530d";
export const url=new URL("../icons/e_mobiledata_badge.svg?v=058f12126729fceb74a8923d363d0cb4b10cf3d57b5e9e3f05a41ab2ec6c1235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
