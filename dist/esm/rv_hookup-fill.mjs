export const name="rv_hookup-fill";
export const id="dl_2332cbca5481445688d5";
export const url=new URL("../icons/R/rv_hookup-fill.svg?v=7212d6b06068cc4d9c7fba8f01d947ef5481583d24b7fd14129ba51d248d45b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
