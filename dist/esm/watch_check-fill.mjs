export const name="watch_check-fill";
export const id="dl_8bde33e4b1a3dec96e2c";
export const url=new URL("../icons/watch_check-fill.svg?v=dbe0b8a069651020f99d0a7c1ec0d525702c8d0b671641119f9504e1b25237bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
