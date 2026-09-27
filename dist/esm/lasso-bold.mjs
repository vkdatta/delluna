export const name="lasso-bold";
export const id="dl_a9e3aa18815e443fb779";
export const url=new URL("../icons/lasso-bold.svg?v=7273867a4158d994f81928618cc83ba0f49558eb96664eaddd54b8b00ef48e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
