export const name="table-bold";
export const id="dl_d84dabdf62d44f4992c3";
export const url=new URL("../icons/T/table-bold.svg?v=191f0d993f4c7810225f58e9b0428e5617188f645a6c888f15588bda8b53d92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
