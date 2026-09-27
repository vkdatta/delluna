export const name="chart-line-up-bold";
export const id="dl_d4902ceae7794c668d7e";
export const url=new URL("../icons/chart-line-up-bold.svg?v=856a341819eac71e5c1ad75c96873fc419a263d02e8150323a9f250a70e81da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
