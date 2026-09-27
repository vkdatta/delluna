export const name="car-fill";
export const id="dl_40e2854e3c0c43c08500";
export const url=new URL("../icons/car-fill.svg?v=80b1273c84b41c84fe1034794187de9c7d099f2ddda552d80df82aaed8592013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
