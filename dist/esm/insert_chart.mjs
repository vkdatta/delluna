export const name="insert_chart";
export const id="dl_0c777e510ee4ce01ce3c";
export const url=new URL("../icons/insert_chart.svg?v=8e44438db1cc0b8b78b4a0cee3cdb5d0f19e9d78265d30decf15c869e4a40dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
