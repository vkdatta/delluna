export const name="lucid_3-parasol";
export const id="dl_2b668dc347994e8eb1f5";
export const url=new URL("../icons/lucid_3-parasol.svg?v=876ce72a9579c08607e649213bf24e7435f5feca18f67542d4ff83b4874aa227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
