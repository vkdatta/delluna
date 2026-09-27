export const name="repeat-once";
export const id="dl_0ca9b1f90e554e6584d0";
export const url=new URL("../icons/repeat-once.svg?v=890971ed4490c6e45c09f46e8b34bb9ff5c0dfddbe771751f53670fab780b6c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
