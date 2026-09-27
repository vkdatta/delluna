export const name="lucid_2-grid-2x2-plus";
export const id="dl_ec04de237e7943eeae07";
export const url=new URL("../icons/lucid_2-grid-2x2-plus.svg?v=651fd60f02bbcf217e458843f92a0ef0ab8f33dcee679b42720e3ea37d47e24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
