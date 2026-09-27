export const name="thermometer-light";
export const id="dl_890aaab0e70a21e05d57";
export const url=new URL("../icons/thermometer-light.svg?v=adf61373564ff22496b01190f288d5bd6e3c671750f639a441236be621c62b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
