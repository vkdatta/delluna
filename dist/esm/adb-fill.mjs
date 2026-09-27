export const name="adb-fill";
export const id="dl_49756093f0347499a995";
export const url=new URL("../icons/adb-fill.svg?v=2dac18af698df388ca8d63fe4b7f7f7e218a2eeb9cf9787fe0907b478e181f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
