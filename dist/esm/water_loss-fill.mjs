export const name="water_loss-fill";
export const id="dl_4d52f8ee659e45d63591";
export const url=new URL("../icons/water_loss-fill.svg?v=956a006a3d53d228cee1f55f879a6dfe50c8429b152f946da82908e38025a759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
