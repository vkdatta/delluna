export const name="solar-panel-fill";
export const id="dl_e972682194093d5e7602";
export const url=new URL("../icons/solar-panel-fill.svg?v=489ecd02646439bb33a9d1551c9b8beb3efd816b54b09281d08d4236181f7b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
