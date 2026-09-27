export const name="android-logo-duotone";
export const id="dl_429b5a8079ac4331afc0";
export const url=new URL("../icons/android-logo-duotone.svg?v=816f3a09732a41fc9768e696768b21be35d5cedd73ea179d1b4700549bfdc234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
