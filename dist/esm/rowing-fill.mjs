export const name="rowing-fill";
export const id="dl_4abe799fb4b21299a9ef";
export const url=new URL("../icons/rowing-fill.svg?v=bce8d857f1bf4c36fc5c5a5745d72798bd6d8d2aeb1d9b245689d506d3e73697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
