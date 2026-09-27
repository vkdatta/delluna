export const name="barcode-fill-classic";
export const id="dl_1372fff345a087dcf6d2";
export const url=new URL("../icons/barcode-fill-classic.svg?v=f0108b28a94727e0d28f940e79ec4ec06a5ae828944867c04bf4b21e645da6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
