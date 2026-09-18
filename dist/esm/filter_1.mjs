export const name="filter_1";
export const id="dl_6e6e244d3d0247a29df8";
export const url=new URL("../icons/filter_1.svg?v=bf683785992cd149380986717514a4e6a06ad588781ecac8df4041038ccc6bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
