export const name="devices-fill";
export const id="dl_2b0afa616d0848f4bacc";
export const url=new URL("../icons/devices-fill.svg?v=1c74f6fd2b166bdc5b143683f8fe140386951fd50fae2a43cb2e9ad9044b9413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
