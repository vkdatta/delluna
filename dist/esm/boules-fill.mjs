export const name="boules-fill";
export const id="dl_dc16d9cf9315429386ca";
export const url=new URL("../icons/boules-fill.svg?v=ae3643aa5f19b7f5e062d6878630d5e2b29be7f9402d440dabc318e8daf8598f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
