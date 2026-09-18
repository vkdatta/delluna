export const name="battery_android_0";
export const id="dl_deb4e9d036f946b38d78";
export const url=new URL("../icons/battery_android_0.svg?v=0bae03020b65ffd5eff2d96b7f0e750d95a3bebf9ae4f23db3f1fd63e05b1eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
