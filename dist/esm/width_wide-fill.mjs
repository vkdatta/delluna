export const name="width_wide-fill";
export const id="dl_4a331204823c27557044";
export const url=new URL("../icons/width_wide-fill.svg?v=a78c1eed130b895ac85a73e63ba4d00615cc71bc4e5f6379d3268123cd9648f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
