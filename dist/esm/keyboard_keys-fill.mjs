export const name="keyboard_keys-fill";
export const id="dl_5903301b8154734322c4";
export const url=new URL("../icons/keyboard_keys-fill.svg?v=7289a5b0ab14d1561808594c7d3801653cab652418d80f232587ae80bb52bb42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
