export const name="disc-bold";
export const id="dl_58d62c01c7f14e0dac08";
export const url=new URL("../icons/disc-bold.svg?v=95cea37e5f053c26c9082799ea00d5ae638adac6af170a0197b90371e4340dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
