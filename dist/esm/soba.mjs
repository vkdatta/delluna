export const name="soba";
export const id="dl_bbe7db28224f73b31306";
export const url=new URL("../icons/soba.svg?v=7e3da941ee50fb92ee8baded9683746a50e5f8dac2c1ff9aebe2491034d1e92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
