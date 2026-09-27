export const name="wrench-thin";
export const id="dl_9b1cbe43fae0acd8b2b4";
export const url=new URL("../icons/wrench-thin.svg?v=006f3fe5840a6cb31ac859daf710286c04429fce55468704e3efa3b34647ceb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
