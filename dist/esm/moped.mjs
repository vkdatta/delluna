export const name="moped";
export const id="dl_beb57482589e40f69970";
export const url=new URL("../icons/moped.svg?v=a196b53c6b9e3c3b0831592e95ef7f489a991bd193a7f14fc52903c9e9b669e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
