export const name="reddit-logo";
export const id="dl_b3738f8ec6584a91b269";
export const url=new URL("../icons/reddit-logo.svg?v=27f76edb4e7ecbb5a5305d60d2b7fc4d0d61a80412d029336d5543c08423ec35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
