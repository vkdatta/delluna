export const name="lucid_3-square-check-big";
export const id="dl_29f0028cc61f4d2aa811";
export const url=new URL("../icons/lucid_3-square-check-big.svg?v=9105ccecaa51228c49d2a0ab4a7196d350da4e0a405d864e79a9152f313f03de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
