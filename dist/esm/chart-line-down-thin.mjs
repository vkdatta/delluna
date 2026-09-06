export const name="chart-line-down-thin";
export const id="dl_cdd7e3d17bf141368d64";
export const url=new URL("../icons/chart-line-down-thin.svg?v=e65fe503ea235cfada4e18ef5a630b328032e5b0380b0bda523c71c03f99377f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
