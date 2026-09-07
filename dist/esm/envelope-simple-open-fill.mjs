export const name="envelope-simple-open-fill";
export const id="dl_68e1cdd515dd4d7798ae";
export const url=new URL("../icons/envelope-simple-open-fill.svg?v=439b1bb64d89a7263cdb396398df39cb2c7368fba830146dbd07ce29d6e2af3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
