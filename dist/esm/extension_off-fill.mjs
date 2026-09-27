export const name="extension_off-fill";
export const id="dl_d50718f435d058b0c9e4";
export const url=new URL("../icons/extension_off-fill.svg?v=4b43860194092eacfe77e4c42ab736117735c886ffbd491e55b9a94d96ea0e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
