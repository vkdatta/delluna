export const name="drop-simple-fill";
export const id="dl_c4fe71fcafa548c99ade";
export const url=new URL("../icons/drop-simple-fill.svg?v=684f8eb95b1eef2445b1373874fd98ce1cb21477dcfd9fa319ab85d7a9684df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
