export const name="lowercase";
export const id="dl_26321b83f73cced823cb";
export const url=new URL("../icons/lowercase.svg?v=ee9dd87198f1660f8a4b65c319dd2f99903d47c51a888eb89a91ba6e99cfbbc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
