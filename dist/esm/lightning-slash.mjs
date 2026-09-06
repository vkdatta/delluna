export const name="lightning-slash";
export const id="dl_7f99d8d871c34f6ba96b";
export const url=new URL("../icons/lightning-slash.svg?v=e0444fc03c39d830ed46d38c2a633b01c69fcb7f740022aafe07cad04a66146f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
