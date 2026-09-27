export const name="outlet";
export const id="dl_e78529cc9ea7caa3616f";
export const url=new URL("../icons/outlet.svg?v=4a620b03f779db2a41eeb002ee1e9f0b58c5c6ced013b34f8976333649aff6e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
