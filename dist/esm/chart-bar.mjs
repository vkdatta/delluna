export const name="chart-bar";
export const id="dl_acf01a98716142e58c5e";
export const url=new URL("../icons/chart-bar.svg?v=1779dc4663776ae29d0ae31a7ab660f3962c948a37aad33322df015b908c8a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
