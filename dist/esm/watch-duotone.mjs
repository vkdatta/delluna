export const name="watch-duotone";
export const id="dl_5f5bddad1246133e1c5d";
export const url=new URL("../icons/watch-duotone.svg?v=c1b7bb81d95c93305f565a652a51fd44af52270f126f1d38f5d2d3c9a00d1be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
