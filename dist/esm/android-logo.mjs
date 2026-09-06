export const name="android-logo";
export const id="dl_297c6865b91a4d1aabc6";
export const url=new URL("../icons/android-logo.svg?v=a7913ed07623ade21545cc0d271021e30753a370b2b9e96251cb521b591cc371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
