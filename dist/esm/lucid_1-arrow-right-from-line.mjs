export const name="lucid_1-arrow-right-from-line";
export const id="dl_ecd05a2706f54968aa92";
export const url=new URL("../icons/lucid_1-arrow-right-from-line.svg?v=6adacc9e293ef3677bb6a50cf14f92559c316448785e6d87a2cc47cb525119b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
