export const name="tractor-bold";
export const id="dl_6938c45d3184ad5b71f5";
export const url=new URL("../icons/tractor-bold.svg?v=e069676101968c864d1e0282199949defbb33a14f38123c6456db0e0cdd99682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
