export const name="city";
export const id="dl_ad179bc8595e41cda7a9";
export const url=new URL("../icons/city.svg?v=a8a4318656d0cd43f341090e0d51dcaddb1e4525bc4e3c886240c3979376782d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
