export const name="lucid_2-hexagon";
export const id="dl_eeb955cfc7274f6ea417";
export const url=new URL("../icons/lucid_2-hexagon.svg?v=5e9d015a8b6d914ee67af6fdd40734279ecbef1b4cd1b7e9d778f8659ec4b5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
