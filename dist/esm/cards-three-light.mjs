export const name="cards-three-light";
export const id="dl_6cb79e2d8f654588ba2c";
export const url=new URL("../icons/cards-three-light.svg?v=b2f254810ae93733330309d9f429b37123695820ad512bfd6418d2a951ebbebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
