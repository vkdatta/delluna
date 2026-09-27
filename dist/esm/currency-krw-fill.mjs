export const name="currency-krw-fill";
export const id="dl_7d6bb392af784ab4ae7f";
export const url=new URL("../icons/currency-krw-fill.svg?v=f38fdcd044a65d95ca8361f9ca7d2e445cf57d7f5f4e211113c8eaee0d2e815a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
