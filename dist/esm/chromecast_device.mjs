export const name="chromecast_device";
export const id="dl_46b350486f7593770496";
export const url=new URL("../icons/chromecast_device.svg?v=8b37429c0924a2d82eb8228e689b7626e36131954f5ed1b7a4357bc297b03f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
