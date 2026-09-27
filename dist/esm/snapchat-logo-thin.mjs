export const name="snapchat-logo-thin";
export const id="dl_0afc02fe7a1989db4b44";
export const url=new URL("../icons/snapchat-logo-thin.svg?v=66d9bb7f7dc0ebda2c20f51463e6faf318cdc3f688453ae1a7db32c21fac2921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
