export const name="option-thin";
export const id="dl_2a395c2c615b41f3ad2d";
export const url=new URL("../icons/option-thin.svg?v=bac7a51c63fe5bf52e70d78112a1f5f3db644a8c3675257cba0687695d3b3382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
