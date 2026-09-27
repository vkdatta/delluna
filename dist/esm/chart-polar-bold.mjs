export const name="chart-polar-bold";
export const id="dl_55de25c0caab4b49bca8";
export const url=new URL("../icons/chart-polar-bold.svg?v=5388205c03cfcd413f43499fef656de8e5b3d36cb1631012fe6e7891c3d4fd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
