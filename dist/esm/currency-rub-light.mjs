export const name="currency-rub-light";
export const id="dl_3d1c456d4f704b0a8037";
export const url=new URL("../icons/currency-rub-light.svg?v=de18018efeb19a883c8ab42f1e36201419fbb95217d3c34c81720f5c296d9ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
