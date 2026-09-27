export const name="lucid_2-credit-card";
export const id="dl_7ac68abdf83f4762862e";
export const url=new URL("../icons/lucid_2-credit-card.svg?v=b45117c4c44c4ea570b2425c771b6df9369a3582a63c0019bbedd934ad3cd643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
