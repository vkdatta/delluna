export const name="cactus-thin";
export const id="dl_b641fb1f26994cdf9b38";
export const url=new URL("../icons/cactus-thin.svg?v=32cdb327f380e6b72782d3accc2725ea71a0a63f926504abbf8a6549384903a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
