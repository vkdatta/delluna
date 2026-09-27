export const name="currency_franc";
export const id="dl_90416cbec0da61cafbd2";
export const url=new URL("../icons/currency_franc.svg?v=f25e6a5df30f00f671e684d74fd5ad50b7138a3341b90234d6ff9cd0805babe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
