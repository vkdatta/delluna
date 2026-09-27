export const name="alt_route-fill";
export const id="dl_321ae97d0e43bc82c616";
export const url=new URL("../icons/alt_route-fill.svg?v=2cd6e82e75f01d555451afa592871674a68400adc51abbd28da8d8ef704e777d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
