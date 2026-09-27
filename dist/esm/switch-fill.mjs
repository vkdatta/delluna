export const name="switch-fill";
export const id="dl_0b1549aac2108f82240b";
export const url=new URL("../icons/switch-fill.svg?v=b21f38ba7cb49eec7cdf3fa98f540a8aa45e2a7307d65a5567c0c402d9957fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
