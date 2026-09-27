export const name="lucid_2-ellipsis";
export const id="dl_3cc1859898ab4eaaaa2a";
export const url=new URL("../icons/lucid_2-ellipsis.svg?v=5044256f6c9ad7066e96b21c54ec8531b6666e919797bfef1e9cb42f30dd9fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
