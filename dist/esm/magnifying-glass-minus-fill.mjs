export const name="magnifying-glass-minus-fill";
export const id="dl_54ecc7e3d02b4a89b143";
export const url=new URL("../icons/magnifying-glass-minus-fill.svg?v=747d2f74a5718373c66f82dd28ce2671ec7365a132b58889df9e2975a8ad8d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
