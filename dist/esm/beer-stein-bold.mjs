export const name="beer-stein-bold";
export const id="dl_4ffc7ca1266046c2a722";
export const url=new URL("../icons/beer-stein-bold.svg?v=1ca6ad68f5e909195746cd3c1f8d4d1c7f749004b6d3e5a62798ddd71df95093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
