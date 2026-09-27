export const name="lucid_2-credit-card-reader";
export const id="dl_1bab677e329049e9bfa1";
export const url=new URL("../icons/lucid_2-credit-card-reader.svg?v=2340ff417804f3bcfd6ef237bfe2261eaed64c8ec237193d1f1da742b4c8ddea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
