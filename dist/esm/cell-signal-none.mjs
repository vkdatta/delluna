export const name="cell-signal-none";
export const id="dl_c9496c7fc12c42279cd9";
export const url=new URL("../icons/cell-signal-none.svg?v=d0a25f606d40b41256003294d44d3131af4b72678f4619703c09bc109ad4c1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
