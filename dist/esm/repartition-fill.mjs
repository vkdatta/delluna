export const name="repartition-fill";
export const id="dl_0fa1836d513312f84287";
export const url=new URL("../icons/repartition-fill.svg?v=8733f6d4665bb648772edf1e6846d58f973215ad69fe27bdb50204d0c8ccbc51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
