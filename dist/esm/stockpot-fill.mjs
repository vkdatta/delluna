export const name="stockpot-fill";
export const id="dl_a6726f70fdcb23c20820";
export const url=new URL("../icons/stockpot-fill.svg?v=74c77f2594d602fb1e1f1e1b2a683221b800065c020c9bad10246483829a6b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
