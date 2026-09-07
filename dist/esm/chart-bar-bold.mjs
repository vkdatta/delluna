export const name="chart-bar-bold";
export const id="dl_0ba420a69be944729a00";
export const url=new URL("../icons/chart-bar-bold.svg?v=dec4c21084915b1115d14bce389b66c2c6af19abdb1b61d8e752b74ecd91a404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
