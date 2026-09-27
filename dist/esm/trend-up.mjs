export const name="trend-up";
export const id="dl_5d1842254fc79f0d4936";
export const url=new URL("../icons/trend-up.svg?v=f193ef488ae46779ab3399c0ed61d15e2fa3800ff40b5fe119831a233ee5fc18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
