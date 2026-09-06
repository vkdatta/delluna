export const name="android-logo-bold";
export const id="dl_ba2bf08253a44ee4b14d";
export const url=new URL("../icons/android-logo-bold.svg?v=c047e4d1ec374c8a7fdabafc6b2a40db0af51ca7ef09929864f164be915f3251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
