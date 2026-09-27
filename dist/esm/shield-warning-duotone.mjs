export const name="shield-warning-duotone";
export const id="dl_715328b6e7504dce0875";
export const url=new URL("../icons/shield-warning-duotone.svg?v=7fc44062d46a4f78cf42138aa5c0cadaa35c5207edd1587315907921ffd599cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
