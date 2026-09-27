export const name="lucid_2-flower";
export const id="dl_d4a8461950ae46fc8235";
export const url=new URL("../icons/lucid_2-flower.svg?v=d3b90e5c742ac9d6615be63a584e6765674d91f49d0010ae56fb12724e94aeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
