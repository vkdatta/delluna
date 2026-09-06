export const name="arrow-line-down-right-light";
export const id="dl_528d23a61b014d9ab90b";
export const url=new URL("../icons/arrow-line-down-right-light.svg?v=e37a77a3232930c7100783f2ab89cd40a028511d364a2bcf09e4459c10c9a73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
