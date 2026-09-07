export const name="chart-pie-light";
export const id="dl_2fce1250c0bf4b2b9434";
export const url=new URL("../icons/chart-pie-light.svg?v=b80414540033d6648acf3c37667f019f54c6d72c109b9b56f024d12f47d82964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
