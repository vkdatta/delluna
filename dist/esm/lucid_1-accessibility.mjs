export const name="lucid_1-accessibility";
export const id="dl_4994fafa4c3348ad9b19";
export const url=new URL("../icons/lucid_1-accessibility.svg?v=b760d59fca4bdeb91371404cf75e71510d929dece6fcda76221489bc679143fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
