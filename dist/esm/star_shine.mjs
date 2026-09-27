export const name="star_shine";
export const id="dl_9ab08f67a707144a62b5";
export const url=new URL("../icons/star_shine.svg?v=44f1697ed49bd95ac465b5d3b9a370188a7b2bc6821d630d37a04291e6d02b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
