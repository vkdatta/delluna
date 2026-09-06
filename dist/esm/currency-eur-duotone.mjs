export const name="currency-eur-duotone";
export const id="dl_23bf7e1e00ef4f93a555";
export const url=new URL("../icons/currency-eur-duotone.svg?v=f3a54c6b48ef210e4df9ae48b14b08fd88c180dfd8f6ca340f639154f3ad16dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
