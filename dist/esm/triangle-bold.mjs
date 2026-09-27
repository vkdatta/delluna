export const name="triangle-bold";
export const id="dl_b04537bbd55a4948e325";
export const url=new URL("../icons/triangle-bold.svg?v=5d3723b14b4e5da5076d703cf1b96b960402103067003099dc452e55bef6fc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
