export const name="triangle-right";
export const id="dl_63793fbbcb3546d4bcaa";
export const url=new URL("../icons/triangle-right.svg?v=e8658f25c531f9d726433aa456adc73d5bb3ec9114dda320bf011d96f1877c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
