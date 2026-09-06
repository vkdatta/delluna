export const name="headset-duotone";
export const id="dl_7cd4a70cf2d347e684ba";
export const url=new URL("../icons/headset-duotone.svg?v=e8251d024d60adba471f395f063fbbb94fa50d2f929813e4f1206536e1f67c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
