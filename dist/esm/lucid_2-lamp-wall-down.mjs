export const name="lucid_2-lamp-wall-down";
export const id="dl_fe975e6379134dbcb1b8";
export const url=new URL("../icons/lucid_2-lamp-wall-down.svg?v=decea2e265811e0e63e7fd51412ea464a3afe28ea2518a1f89f057a3dc6aed9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
