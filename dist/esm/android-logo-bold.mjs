export const name="android-logo-bold";
export const id="dl_ba2bf08253a44ee4b14d";
export const url=new URL("../icons/android-logo-bold.svg?v=e9d34a817ba634fcc20891d06bdae2ecb1f691e424bda2d3b629185a024ebe80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
