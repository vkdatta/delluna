export const name="mobile_vibrate";
export const id="dl_c7668319379c6ce7e2de";
export const url=new URL("../icons/mobile_vibrate.svg?v=09b7afd8e6a346a61352d0025b9d9a2c5244c5679a0835cf44c1ed3f2b711992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
