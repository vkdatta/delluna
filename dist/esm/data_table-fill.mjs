export const name="data_table-fill";
export const id="dl_98a35ca4b26ec7650eee";
export const url=new URL("../icons/data_table-fill.svg?v=577702fa07a6d21265977358daba8e6e100a285d0bbd0f6dfd99f64764a30030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
