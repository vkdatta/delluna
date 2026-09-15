export const name="extension_off-fill";
export const id="dl_d9e65928217646d7b4a3";
export const url=new URL("../icons/E/extension_off-fill.svg?v=c297c54f31bb39af0e98b8dcf19aaebb8bd8bfdcd1a24078ed86bf18e0a0f8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
