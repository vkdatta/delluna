export const name="key_vertical-fill";
export const id="dl_e1aff365a7f2c201c2f7";
export const url=new URL("../icons/key_vertical-fill.svg?v=830f66d96feea3cdad5c948706248e1650f514224a9008c80cbe3f5ec14051e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
