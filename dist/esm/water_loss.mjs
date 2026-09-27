export const name="water_loss";
export const id="dl_daed1dcdb2d3f7979f03";
export const url=new URL("../icons/water_loss.svg?v=95d324372faaed4ed7d83d968c748d45c51f849dd16c74552b4535a782e10269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
