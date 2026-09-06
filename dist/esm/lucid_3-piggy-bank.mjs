export const name="lucid_3-piggy-bank";
export const id="dl_08c4fcf32abe47dfb41a";
export const url=new URL("../icons/lucid_3-piggy-bank.svg?v=ab6118df673ed58e0c2913459c0d0610d9eb428f7a1735458cd00a912086e7a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
