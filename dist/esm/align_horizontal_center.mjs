export const name="align_horizontal_center";
export const id="dl_881b901dca2132b13e7f";
export const url=new URL("../icons/align_horizontal_center.svg?v=bff9104d652084c2e0a0770676baf538451420afe1a1a00b04231598d71c7100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
