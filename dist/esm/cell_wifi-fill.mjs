export const name="cell_wifi-fill";
export const id="dl_08fcf1cd7a23c8cc2b89";
export const url=new URL("../icons/cell_wifi-fill.svg?v=686434e12ddf78f7923b5281359f64c92f3b7483f6e33a0305c1aa6c5b1a86b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
