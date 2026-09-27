export const name="coin-vertical-light";
export const id="dl_afd2f66cb99e4ed59f08";
export const url=new URL("../icons/coin-vertical-light.svg?v=ca37fee387b24f59d474374d4936f73449e701c78f1f5300f836a8f30789da8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
