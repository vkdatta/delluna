export const name="zodiac-leo";
export const id="dl_44cbdff2a3f4407391cb";
export const url=new URL("../icons/zodiac-leo.svg?v=d148c131a71bcfa97242a6e4c1710ec775cb053bb23f8ccf6d87ea9fd3bab0ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
