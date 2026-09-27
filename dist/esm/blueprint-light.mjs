export const name="blueprint-light";
export const id="dl_d3a35b537dca4be7ae23";
export const url=new URL("../icons/blueprint-light.svg?v=a53a0e2f66181f8ff42fe686db35cd1a9e0913a81046356f6a92ddd01363527f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
