export const name="dot-fill";
export const id="dl_dd1908bd45d448f2bce6";
export const url=new URL("../icons/dot-fill.svg?v=3f19dd494128f87b7fb3843dc47e8a4e57f9604eeb11374e58f9b191644928ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
