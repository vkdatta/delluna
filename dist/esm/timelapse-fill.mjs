export const name="timelapse-fill";
export const id="dl_ff027b510bced28f3a49";
export const url=new URL("../icons/timelapse-fill.svg?v=3887ecc6ff709d1006884977a5b973473205b922f6dc18809fae1499d3a3ae7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
