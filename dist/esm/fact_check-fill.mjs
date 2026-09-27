export const name="fact_check-fill";
export const id="dl_d31577fa582979d6c7a3";
export const url=new URL("../icons/fact_check-fill.svg?v=288f150beaf6718c1ad31905c88b477345c092a0df6f7a0a86973a669378eb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
