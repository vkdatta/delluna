export const name="thermometer-simple-duotone";
export const id="dl_c6bbc737af2e63da940f";
export const url=new URL("../icons/thermometer-simple-duotone.svg?v=b9a4a303ee90a4a675421161c2bfb0d55e2a429cc5bfa4bd421d84fc204191ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
