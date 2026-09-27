export const name="chart-pie-slice-light";
export const id="dl_abade74aabb04dc4a007";
export const url=new URL("../icons/chart-pie-slice-light.svg?v=406c90d7736d3a4b70b2c9c81f61ae74fd68a976616cc94d061bdad415e70b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
