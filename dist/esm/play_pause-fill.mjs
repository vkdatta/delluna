export const name="play_pause-fill";
export const id="dl_9f2fd4b9cfb542eac610";
export const url=new URL("../icons/play_pause-fill.svg?v=971864fb24765a3b514bae596523f7a4abdb9a8cb3a8cb339d837d45ad1866e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
