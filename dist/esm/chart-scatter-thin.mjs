export const name="chart-scatter-thin";
export const id="dl_68583a9b125640a48910";
export const url=new URL("../icons/chart-scatter-thin.svg?v=5ebd28d1850a367ba7ac8e430c6e66e3309f21bef6fdb962503e7c2cfa99e066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
