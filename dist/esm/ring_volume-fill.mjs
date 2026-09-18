export const name="ring_volume-fill";
export const id="dl_e679adc28e654c0a8756";
export const url=new URL("../icons/R/ring_volume-fill.svg?v=ab7047c2d22e4255745f089e98482fe5876d976b72c7ed034e1ec69d70073f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
