export const name="drop-half-fill";
export const id="dl_05a56e16598e4142ac63";
export const url=new URL("../icons/drop-half-fill.svg?v=f009aff97c4dcbc694132ab2e30f60b7a40edf85e7324e6a158de47dcb22e86a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
