export const name="selection-foreground-bold";
export const id="dl_adc9284a1c7048e56b3a";
export const url=new URL("../icons/selection-foreground-bold.svg?v=e9825ec9a6d207beb48247265bf790cc1a4083c0f7b4972aa2538abf98866251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
