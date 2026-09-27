export const name="phone-list-light";
export const id="dl_f635ec0c86324cdba15f";
export const url=new URL("../icons/phone-list-light.svg?v=3e8755a7c43204b28cfcab1815e2edfc5803ae825f36224f820aeba1b8015a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
