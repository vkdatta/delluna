export const name="ny-times-logo-bold";
export const id="dl_ca51b73672254f67b6ee";
export const url=new URL("../icons/ny-times-logo-bold.svg?v=ebc83e1cd06c09824d31bcefba08483bda1bd43949348e3f9598e72172b7ba2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
