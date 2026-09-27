export const name="zoom_out-fill";
export const id="dl_fc4c58f7225352eb508e";
export const url=new URL("../icons/zoom_out-fill.svg?v=ff3a8ce3a0e1b170ba8bca5408a1c117f757a76dd322f74eeaaebced83b55605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
