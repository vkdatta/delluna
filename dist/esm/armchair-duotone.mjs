export const name="armchair-duotone";
export const id="dl_8ca89da9bcde43978a0a";
export const url=new URL("../icons/armchair-duotone.svg?v=593652140d6a8cd53f57b931fab1b9881b567e1716029419fc7abe7302833f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
