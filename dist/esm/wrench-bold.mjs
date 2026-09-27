export const name="wrench-bold";
export const id="dl_c645572fcbc6ae67f8d1";
export const url=new URL("../icons/wrench-bold.svg?v=66fca060e7090d9faa822733ea9f95ecf931668d3be8c9ac1c766a1faa589dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
