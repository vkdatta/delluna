export const name="currency-rub-thin";
export const id="dl_635c87a5f1144ea88346";
export const url=new URL("../icons/currency-rub-thin.svg?v=31a2e927c8e9aadd111b0a4e7f7643c5c3af0d1c226635f61b917d6d675eaafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
