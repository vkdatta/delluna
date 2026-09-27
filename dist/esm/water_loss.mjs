export const name="water_loss";
export const id="dl_8e9e2fbd7c2a7fa9fc29";
export const url=new URL("../icons/water_loss.svg?v=616a0b260a31681582d7691879a69d658dc3f193f1cb2a4cb3b055396c51b3b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
