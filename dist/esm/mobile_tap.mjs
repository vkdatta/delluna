export const name="mobile_tap";
export const id="dl_0de53f3ffab449d0b185";
export const url=new URL("../icons/mobile_tap.svg?v=a2f95f8e74681fbfb9bc1d6344d938628c5c2193b66443092616b5d57aa31334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
