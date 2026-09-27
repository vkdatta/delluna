export const name="lucid_1-arrow-right-to-line";
export const id="dl_733ef2dab4e748088858";
export const url=new URL("../icons/lucid_1-arrow-right-to-line.svg?v=c714ef28c6a62c5b53a6851986f5d2af180f14f447a10fbac4eff117ac60e69e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
