export const name="file-csv";
export const id="dl_641cce62160c413d920a";
export const url=new URL("../icons/file-csv.svg?v=62bf269f1a4aee8a064bf1fbfd8e250b07ca55d627171e74a3733d3681991503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
