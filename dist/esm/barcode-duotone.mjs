export const name="barcode-duotone";
export const id="dl_24fe801fbfc4429b9bdc";
export const url=new URL("../icons/barcode-duotone.svg?v=35309b5a595ac31b3974ceb8eb6a7e21297386a3533e5959c9fa2aa23ea7a619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
