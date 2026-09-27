export const name="currency-ngn-light";
export const id="dl_a29ae81a7d1a4ab9b755";
export const url=new URL("../icons/currency-ngn-light.svg?v=858df1a94eccd73ddca525398017243779a9a85482b73ccaa808164533b6b6b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
