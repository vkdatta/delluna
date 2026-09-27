export const name="battery-warning-bold";
export const id="dl_177bbb356b3f4677be98";
export const url=new URL("../icons/battery-warning-bold.svg?v=3f1b692432114c8af6372c8fe60a93f7f100046f6df0d8d3ba9a7c108ad37b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
