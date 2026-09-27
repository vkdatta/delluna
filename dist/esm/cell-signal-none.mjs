export const name="cell-signal-none";
export const id="dl_c9496c7fc12c42279cd9";
export const url=new URL("../icons/cell-signal-none.svg?v=9249809520cee419c354ce81de0a42a02b4bbcb38b56b1cc04c4a2251ca2e7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
