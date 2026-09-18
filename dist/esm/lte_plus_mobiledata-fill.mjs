export const name="lte_plus_mobiledata-fill";
export const id="dl_c722ac1c219847a7b7bf";
export const url=new URL("../icons/L/lte_plus_mobiledata-fill.svg?v=e6aac16cb499a355dc2467921474e73ab4c67e291a74ce8f0904adc7333065c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
