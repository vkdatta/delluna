export const name="chart-line-down-bold";
export const id="dl_7f7dc915dc8348398e13";
export const url=new URL("../icons/chart-line-down-bold.svg?v=0dcbadb8930efea2e62d737e814f3fa2c80e2999fbab782d2c80e3634ab67097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
