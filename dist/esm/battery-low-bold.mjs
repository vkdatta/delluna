export const name="battery-low-bold";
export const id="dl_8b0595076f0d4ec7b36b";
export const url=new URL("../icons/battery-low-bold.svg?v=9d421af56c20065f8f2413f7fd848f3e06ec87338dd8505a8461d01865f053e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
