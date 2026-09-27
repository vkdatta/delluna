export const name="flag-banner-fold-duotone";
export const id="dl_9881eb482d7b453f9947";
export const url=new URL("../icons/flag-banner-fold-duotone.svg?v=af6589197bcb310654522b27c0ee690f2c8e0388f6a89ea32ab698ac96d6c6f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
