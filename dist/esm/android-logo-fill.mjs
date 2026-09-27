export const name="android-logo-fill";
export const id="dl_817390ebed7a4962b5c1";
export const url=new URL("../icons/android-logo-fill.svg?v=ff418fab37bebb18fafe2e8727ea4a992bdc05d13045ed472bfab4d5e2822dd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
