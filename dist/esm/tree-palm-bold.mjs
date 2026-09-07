export const name="tree-palm-bold";
export const id="dl_1e44cade230d48118ae4";
export const url=new URL("../icons/T/tree-palm-bold.svg?v=41ef3484c9573dcf255cb34d85e4a8193b08440400e24199e250e5f4d1be8d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
