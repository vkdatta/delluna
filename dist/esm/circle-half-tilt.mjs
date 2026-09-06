export const name="circle-half-tilt";
export const id="dl_1fe03dca125149dba5c7";
export const url=new URL("../icons/circle-half-tilt.svg?v=6c15a93800c2a0949abad59bd8c6e5d909b9830dbdcbe1b72bd2db04553cc52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
