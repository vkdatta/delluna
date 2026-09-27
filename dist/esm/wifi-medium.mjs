export const name="wifi-medium";
export const id="dl_4929ba3e7479522da492";
export const url=new URL("../icons/wifi-medium.svg?v=47203d1a967605e260c2b332482d9b150fc22c6e1dcd259464b37c919d087caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
