export const name="invoice-fill";
export const id="dl_afc7bcd3365c4b9c8336";
export const url=new URL("../icons/invoice-fill.svg?v=1aa31a7ceeb617688d9b1013a8502c9e955098477787aacbc2c0c5c071dac207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
