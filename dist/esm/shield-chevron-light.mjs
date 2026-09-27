export const name="shield-chevron-light";
export const id="dl_eae6017160770592971c";
export const url=new URL("../icons/shield-chevron-light.svg?v=42e67be7b39ec8de56973b596c7fa04c858eb54e4548074ef06208ea46ee28b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
